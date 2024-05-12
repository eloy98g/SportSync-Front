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

// Services
import Api from "../../../services/api";

// Store
import {
  favSport,
  unfavSport,
} from "../../../store/features/favSport/favSportSlice";

// Types
import Sport from "../../../store/types/sport/Sport";

// Theme
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";
import ErrorModal from "../../../components/modals/ErrorModal";
import fetchFavSports from "../../../store/features/favSport/methods/fetchFavSports";

const FavoriteSportsScreen = () => {
  const [filter, setFilter] = useState("");
  const [sports, setSports] = useState<Sport[]>([]);
  const [error, setError] = useState("");
  const [modal, setModal] = useState("");
  const [cardLoading, setCardLoading] = useState("");
  const { status, setStatus } = useStatus();

  const favoriteSports = useAppSelector((state) => state.favSport.favSports);
  const userGid = useAppSelector((state) => state.user.user.gid);

  const dispatch = useAppDispatch();
  const loading = status === "idle" || status === "loading";

  const getData = async () => {
    try {
      await dispatch(fetchFavSports({ userGid: userGid }));
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

  const favHandler = async (sportGid: string) => {
    try {
      const response = await Api.sport.favorite(sportGid, userGid);
      if (response.status === "success") {
        dispatch(favSport(sportGid));
      } else {
        setError(response.message);
        setModal("Error");
      }
    } catch (error: any) {
      setError(error.message);
      setModal("Error");
    }
  };

  const unfavHandler = async (sportGid: string) => {
    try {
      const response = await Api.sport.unfavorite(sportGid, userGid);
      if (response.status === "success") {
        dispatch(unfavSport(sportGid));
      } else {
        setError(response.message);
        setModal("Error");
      }
    } catch (error: any) {
      setError(error.message);
      setModal("Error");
    }
  };

  const sportHandler = async (gid: string) => {
    setCardLoading(gid);
    if (favoriteSports?.includes(gid)) {
      await unfavHandler(gid);
    } else {
      await favHandler(gid);
    }
    setCardLoading("");
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
                      loading={cardLoading === sport.gid}
                    />
                    <Divider height={12} />
                  </React.Fragment>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
      <ErrorModal
        setVisible={setModal}
        visible={modal === "Error"}
        error={error}
      />
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
