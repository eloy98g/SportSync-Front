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
  status: any; // TODO change anys
}

const Team = ({ data, side, status, teamSize }: Props) => {
  const { name, players } = data;

  const wrapperStyle: StyleProp<ViewStyle> = [
    styles.titleWrapper,
    { alignItems: side === "left" ? "flex-start" : "flex-end" },
  ];

  console.log('teamSize',teamSize)
  console.log('BEFORE data.length',players.length)
  let newData = players;
  if (status === "pending" && players.length < teamSize) {
    console.log('inside')
    const elementosFaltantes = teamSize - players.length;
    for (let i = 0; i < elementosFaltantes; i++) {
      newData.push({ gid: null });
    }
  }

  console.log('AFTER data.length',players.length)
  console.log('newData',newData.length)
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
