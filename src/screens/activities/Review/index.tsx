import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
// Components
import Screen from "../../../components/common/Screen";
import Divider from "../../../components/common/Divider";
import PlayerList from "./components/PlayerList";
import Actions from "./components/Actions";
import Comment from "./components/Comment";
import Rating from "./components/Rating";
import Wrapper from "./components/Wrapper";

// Theme
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";

const Review = ({ route }: any) => {
  const { userGid, data, selectedUser } = route.params;
  const [review, setReview] = useState({
    players: selectedUser?.gid ? [selectedUser.gid] : [],
    rating: null,
    comment: "",
    reviewer: userGid,
  });

  useEffect(() => {
    const playerGids = data.teamPlayers.flatMap((team: any) =>
      team.players.map((player: any) => player.gid)
    );
    setReview((prevState: any) => ({ ...prevState, players: playerGids }));
  }, []);

  return (
    <Screen>
      <Wrapper>
        <Divider height={12} />
        {/* TODO: Convert this component to Player.Horizontal */}
        {selectedUser?.gid ? (
          <>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={{ uri: selectedUser.image }}
              />
              <Divider width={20} />
              <Text style={styles.name}>{selectedUser.name}</Text>
            </View>
            <Divider height={24} />
          </>
        ) : (
          <>
            <PlayerList
              data={data.teamPlayers}
              review={review}
              setReview={setReview}
            />
            <Divider height={24} />
          </>
        )}
        <Rating rating={review.rating} setReview={setReview} />
        <Divider height={24} />
        <Comment comment={review.comment} setReview={setReview} />
        <Divider height={24} />
        <Actions review={review} />
        <Divider height={12} />
      </Wrapper>
    </Screen>
  );
};

export default Review;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  name: {
    fontFamily: family.bold,
    fontSize: 14,
    color: colors.grey,
  },
});
