import React from "react";
import {
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
  Text,
  View,
} from "react-native";

// Components
import Player from "./Player";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Types
import Activity, {
  ActivityStatus,
} from "../../../../../store/types/activity/Activity";
import TeamT from "../../../../../store/types/activity/Team";
import { useAppSelector } from "../../../../../hooks";
import isPlayer from "../../methods/isPlayer";

interface Props {
  data: TeamT;
  side: "left" | "right";
  teamSize: number;
  activityData: Activity;
  status: ActivityStatus;
}

const Team = ({ data, side, status, teamSize, activityData }: Props) => {
  const { name, players } = data;
  const userGid = useAppSelector((state) => state.user.user.gid);

  const wrapperStyle: StyleProp<ViewStyle> = [
    styles.titleWrapper,
    { alignItems: side === "left" ? "flex-start" : "flex-end" },
  ];

  const fillArray =
    userGid !== activityData.admin.gid &&
    !isPlayer(userGid, activityData?.teams) &&
    status === "pending" &&
    players.length < teamSize;

  let newData = players;

  if (fillArray) {
    const elementosFaltantes = teamSize - players.length;
    for (let i = 0; i < elementosFaltantes; i++) {
      const gid = Math.random().toString();
      newData.push({ gid, name: "", image: "", placeholder: true });
    }
  }

  return (
    <View style={styles.container}>
      <View style={wrapperStyle}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.gid.toString()}
        data={newData}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Player key={data.gid} data={item} activityData={activityData} />
        )}
      />
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: family.normal,
    fontSize: 20,
    color: colors.grey,
  },
  titleWrapper: {
    width: "100%",
  },
  list: {
    gap: 6,
  },
});
