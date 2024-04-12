import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SelectedPlayer } from "..";
import Divider from "../../../../components/common/Divider";
import PlayerT from "../../../../store/types/activity/Player";
import TeamT from "../../../../store/types/activity/Team";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import Player from "../../ReviewScreen/components/Player";

interface Props {
  data: TeamT;
  playerList: SelectedPlayer[];
  setPlayerList: React.Dispatch<React.SetStateAction<SelectedPlayer[]>>;
}

const Team = ({ data, playerList, setPlayerList }: Props) => {
  const { name, players } = data;
  const playerHandler = (player: PlayerT) => {
    const isSelected = playerList.some((p) => p.gid === player.gid);
    if (isSelected) {
      setPlayerList((prevState) =>
        prevState.filter((p) => p.gid !== player.gid)
      );
    } else {
      setPlayerList((prevState) => [...prevState, { ...player, team: name }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <Divider height={12} />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.gid.toString()}
        data={players}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isSelected = playerList.some((p) => p.gid === item.gid);
          return (
            <Player
              data={item}
              onPress={() => playerHandler(item)}
              selected={isSelected}
            />
          );
        }}
      />
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  title: {
    fontFamily: family.normal,
    fontSize: 20,
    color: colors.grey,
  },
  titleWrapper: {
    width: "100%",
    alignItems: "center",
  },
  list: {
    gap: 6,
  },
});
