import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";

// Hooks
import { useAppSelector } from "../../../../hooks";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Utils
import unixToDate from "../../../../utils/date/unixToDate";
import getFormattedPrice from "../../../../utils/currency/getFormattedPrice";
import formattedDistance from "../../../../utils/distances/formattedDistance";
import distanceBetween from "../../../../utils/distances/distanceBetween";

const PublicActivity = (props: Activity) => {
  const {
    sport,
    visibility,
    type,
    startDate,
    teams,
    playersPerTeam,
    gid,
    price,
    location,
  } = props;
  const { name } = sport;
  const navigation = useNavigation();

  const userLocation = useAppSelector((state) => state.user.user.location);
  const distance =
    "a " + formattedDistance(distanceBetween(userLocation, location));

  const date = unixToDate(startDate);
  const currentPlayers = teams.reduce(
    (sum, team) => sum + team.players.length,
    0
  );
  const totalPlayers = teams.length * playersPerTeam;

  const activityHandler = () => {
    navigation.navigate("ActivityDetail" as never, { gid } as never);
  };

  return (
    <TouchableOpacity onPress={activityHandler} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.icons}>
            <Icon icon={visibility} color={colors.black} size={18} />
            {type !== "normal" && (
              <>
                <Divider width={5} />
                <Icon icon={type} color={colors.black} size={18} />
              </>
            )}
          </View>
        </View>
        <Text style={styles.subText}>{distance}</Text>
      </View>
      <View style={styles.row}>
        <View />
        <Text style={styles.subText}>
          {price ? getFormattedPrice(price) : "Gratis"}
        </Text>
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
    width: "100%",
    height: 100,
    borderRadius: 12,
    padding: 12,
    backgroundColor: colors.secondary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontFamily: family.bold,
  },
  icons: {
    flexDirection: "row",
  },
  subText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: family.semibold,
  },
});
