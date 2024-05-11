import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
} from "react-native";

// Components
import SportCard from "../../activities/CreateActivity/components/SportCard";
import Search from "../../../components/common/inputs/Search";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import BackHeader from "../../../components/BackHeader";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";
import useStatus from "../../../hooks/useStatus";

// Store
import { toggleFavoriteSport } from "../../../store/features/user/userSlice";

// Types
import Sport from "../../../store/types/sport/Sport";

// Theme
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";

// Placeholder
import Api from "../../../services/api";

const FavoriteSportsScreen = () => {
  const [filter, setFilter] = useState("");
  const [sports, setSports] = useState<Sport[]>([]);
  const [error, setError] = useState("");
  const { status, setStatus } = useStatus();

  const favoriteSports = useAppSelector(
    (state) => state.user.user.favoriteSports
  );

  const dispatch = useAppDispatch();
  const loading = status === "idle" || status === "loading";

  const getData = async () => {
    try {
      const response = await Api.sport.getAll();

      if (response.status === "success") {
        setSports(response.data);
        setStatus("success");
      } else {
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const filteredSports = sports.filter((sport) =>
    sport.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const sportHandler = (gid: string) => {
    dispatch(toggleFavoriteSport(gid));
  };

  return (
    <Screen>
      <BackHeader title="Deportes favoritos" />
      <View style={styles.container}>
        {loading ? (
          <View style={styles.wrapper}>
            <ActivityIndicator />
          </View>
        ) : status === "error" ? (
          <View style={styles.wrapper}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : (
          <>
            <View style={styles.search}>
              <Search onSearch={setFilter} placeholder="Buscar deporte" />
            </View>
            <ScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <Divider height={12} />
              {filteredSports.map((sport) => {
                const isFavorite = favoriteSports?.includes(sport.gid);
                return (
                  <React.Fragment key={sport.gid}>
                    <SportCard
                      {...sport}
                      onPress={() => sportHandler(sport.gid)}
                      favorite={isFavorite}
                    />
                    <Divider height={12} />
                  </React.Fragment>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
    </Screen>
  );
};

export default FavoriteSportsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
    paddingTop: 80,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    width: "100%",
    paddingTop: 20,
  },
  content: {
    // height: 1,
    width: "100%",
  },
  error: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.red,
  },
});
