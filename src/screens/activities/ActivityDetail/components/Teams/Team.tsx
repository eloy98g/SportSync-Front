import React from "react";
import {
  StyleSheet,
  FlatList,
  StyleProp,
  ViewStyle,
  Text,
  View,
} from "react-native";
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";
import Player from "./Player";

interface Props {
  data: any;
  side: "left" | "right";
  teamSize: number;
}

const Team = ({ data, side }: Props) => {
  const { name, players } = data;

  const wrapperStyle: StyleProp<ViewStyle> = [
    styles.titleWrapper,
    { alignItems: side === "left" ? "flex-start" : "flex-end" },
  ];
  return (
    <View style={styles.container}>
      <View style={wrapperStyle}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <FlatList
        keyExtractor={(item ) => item.gid}
        data={players}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Player data={item} />}
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
