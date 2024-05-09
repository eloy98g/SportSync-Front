import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";

// Hooks
import { useAppSelector } from "../../../../hooks";
import useNavigate from "../../../../hooks/useNavigate";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Utils
import unixToDate from "../../../../utils/date/unixToDate";
import formattedDistance from "../../../../utils/distances/formattedDistance";
import distanceBetween from "../../../../utils/distances/distanceBetween";

const PublicActivity = (props: Activity) => {
  const {
    sport,
    type,
    startDate,
    teams,
    playersPerTeam,
    gid,
    location,
    access,
  } = props;
  const { name } = sport;
  const { navigateTo } = useNavigate();
  const userLocation = useAppSelector((state) => state.user.location);
  const distance =
    "a " + formattedDistance(distanceBetween(userLocation, location));

  const date = unixToDate(startDate);
  const currentPlayers = teams.reduce(
    (sum, team) => sum + team.players.length,
    0
  );
  const totalPlayers = teams.length * playersPerTeam;

  const activityHandler = () => {
    navigateTo("ActivityDetail", { gid });
  };

  return (
    <TouchableOpacity onPress={activityHandler} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.icons}>
            <Divider width={5} />
            <Icon icon={access} color={colors.black} size={14} />
            {type !== "normal" && (
              <>
                <Divider width={5} />
                <Icon icon={type} color={colors.black} size={14} />
              </>
            )}
          </View>
        </View>
        <Text style={styles.subText}>{distance}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subText}>{date}</Text>
        <Text style={styles.title}>
          ({currentPlayers}/{totalPlayers})
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PublicActivity;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 90,
    borderRadius: 12,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontFamily: family.bold,
  },
  icons: {
    flexDirection: "row",
  },
  subText: {
    fontSize: 10,
    color: colors.black,
    fontFamily: family.semibold,
  },
});
