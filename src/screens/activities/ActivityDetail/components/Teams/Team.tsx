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

interface Props {
  data: any;
  side: "left" | "right";
  teamSize: number;
  activityData: any;
  status: any; // TODO change anys
}

const Team = ({ data, side, status, teamSize, activityData }: Props) => {
  const { name, players } = data;

  const wrapperStyle: StyleProp<ViewStyle> = [
    styles.titleWrapper,
    { alignItems: side === "left" ? "flex-start" : "flex-end" },
  ];

  let newData = players;
  if (status === "pending" && players.length < teamSize) {
    const elementosFaltantes = teamSize - players.length;
    for (let i = 0; i < elementosFaltantes; i++) {
      newData.push({ gid: null });
    }
  }

  return (
    <View style={styles.container}>
      <View style={wrapperStyle}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.gid}
        data={newData}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Player data={item} activityData={activityData} />
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
    fontsize: 20,
    color: colors.grey,
  },
  titleWrapper: {
    width: "100%",
  },
  list: {
    gap: 6,
  },
});
