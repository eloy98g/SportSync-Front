import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Divider from "../../../../../../components/common/Divider";

// Theme
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";
import Player from "./Player";

interface Props {
  data: any;
  setReview: any;
  review: any;
}

const PlayerList = ({ data, review, setReview }: Props) => {
  const playerHandler = (gid: any) => {
    setReview((prevState:any) => {
      const isPlayerIncluded = prevState.players.includes(gid);
      const newPlayers = isPlayerIncluded
        ? prevState.players.filter((player:any) => player !== gid)
        : [...prevState.players, gid];

      return { ...prevState, players: newPlayers };
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Puedes dejar de seleccionar aquellos jugadores que no quieras incluir en
        la valoración.
      </Text>
      <Divider height={12} />
      <ScrollView
        style={styles.verticalScroll}
        showsVerticalScrollIndicator={false}
      >
        {data.map((team: any) => (
          <>
            <Text style={styles.text}>{team.name}</Text>
            <ScrollView
              key={team.name}
              horizontal
              style={styles.horizontalScroll}
              showsHorizontalScrollIndicator={false}
            >
              {team.players.map((player: any) => (
                <>
                  <Player
                    key={player.key}
                    data={player}
                    onPress={() => playerHandler(player.gid)}
                    selected={review.players.includes(player.gid)}
                  />
                  <Divider width={20} />
                </>
              ))}
            </ScrollView>
            <Divider height={12} />
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default PlayerList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.grey,
  },
  horizontalScroll: {
    width: "100%",
  },
  verticalScroll: {
    width: "100%",
  },
});
