import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import Player from "./Player";
import Title from "./Title";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Types
import PlayerT from "../../../../store/types/activity/Player";
import Review from "../../../../store/types/review";
import Team from "../../../../store/types/activity/Team";
import { useAppSelector } from "../../../../hooks";

interface Props {
  data: Team[];
  setReview: (T: any) => void;
  review: Review;
}

const PlayerList = ({ data, review, setReview }: Props) => {
  const userGid = useAppSelector((state) => state.user.user.gid);

  const playerHandler = (gid: string) => {
    setReview((prevState: Review) => {
      const isPlayerIncluded = prevState.users.includes(gid);
      const newPlayers = isPlayerIncluded
        ? prevState.users.filter((player: string) => player !== gid)
        : [...prevState.users, gid];

      return { ...prevState, users: newPlayers };
    });
  };

  return (
    <View style={styles.container}>
      <Title
        text={
          "Puedes dejar de seleccionar aquellos jugadores que no quieras incluir en la valoración"
        }
      />
      <Divider height={12} />
      <ScrollView
        style={styles.verticalScroll}
        showsVerticalScrollIndicator={false}
      >
        {data.map((team: Team) => (
          <>
            <Text style={styles.text}>{team.name}</Text>
            <Divider height={6} />
            <ScrollView
              key={team.name}
              horizontal
              style={styles.horizontalScroll}
              showsHorizontalScrollIndicator={false}
            >
              {team.players
                .filter((player) => player.gid !== userGid)
                .map((player: PlayerT) => (
                  <>
                    <Player
                      key={player.gid}
                      data={player}
                      onPress={() => playerHandler(player.gid)}
                      selected={review.users.includes(player.gid)}
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
