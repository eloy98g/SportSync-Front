import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import Search from "../../../components/common/inputs/Search";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import PlayerCard from "../../../components/social/PlayerCard";

// Hooks
import { useAppSelector } from "../../../hooks";
import useStatus from "../../../hooks/useStatus";

// Services
import Api from "../../../services/api";

// Types
import Player from "../../../store/types/activity/Player";

// Theme
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";

const FollowingScreen = () => {
  const [users, setUsers] = useState<Player[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<Player[]>([]);
  const [error, setError] = useState("");
  const { status, setStatus } = useStatus();
  const userGid = useAppSelector((state) => state.user.user.gid);

  const getData = async () => {
    setError("");
    try {
      setStatus("loading");
      const params = `followedBy=${userGid}`;
      const response = await Api.user.getAll(params);
      if (response.status === "success") {
        setUsers(response.data);
        if (response.data.length === 0) {
          setStatus("empty");
        } else {
          setStatus("success");
        }
      } else {
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setError(error.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const searchHandler = async (search: string) => {
    if (search.length === 0) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLocaleLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  return (
    <Screen>
      <BackHeader title="Siguiendo" />
      <View style={styles.container}>
        {status === "loading" ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator />
          </View>
        ) : status === "error" ? (
          <View style={styles.loadingWrapper}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : (
          <>
            <Search
              onSearch={searchHandler}
              placeholder="Buscar por nombre de usuario"
            />
            <ScrollView style={styles.scroll}>
              <Divider height={12} />
              {filteredUsers.map((user: Player) => (
                <React.Fragment key={user.gid}>
                  <PlayerCard data={user} />
                  <Divider height={12} />
                </React.Fragment>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </Screen>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 92,
    justifyContent: "flex-start",
    paddingHorizontal: 12,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    height: 1,
  },
  error: {
    fontFamily: family.normal,
    color: colors.red,
    fontSize: 12,
  },
});
