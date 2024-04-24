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

// Types
import Player from "../../../store/types/activity/Player";

// Theme
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";

// Store
import USER_SEARCH from "../../../api/placeholders/USER_SEARCH";
import RequestCard from "./components/RequestCard";

interface Props {
  route: {
    params: {
      activityGid: number;
    };
  };
}
const RequestListScreen = ({ route }: Props) => {
  const { activityGid } = route.params;
  const { status, setStatus } = useStatus();
  const [users, setUsers] = useState<Player[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setStatus("loading");
    setError("");
    try {
      // TODO: api call for fetching users join requests for an activity
      setTimeout(() => {
        setUsers(USER_SEARCH);
        setStatus("success");
      }, 500);
    } catch (error) {
      setStatus("error");
      setError(error.message);
    }
  }, []);

  return (
    <Screen>
      <BackHeader title="Peticiones" />
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
          <ScrollView style={styles.scroll}>
            <Divider height={12} />
            {users.map((user: Player) => (
              <React.Fragment key={user.gid}>
                <RequestCard data={user} />
                <Divider height={12} />
              </React.Fragment>
            ))}
          </ScrollView>
        )}
      </View>
    </Screen>
  );
};

export default RequestListScreen;

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
