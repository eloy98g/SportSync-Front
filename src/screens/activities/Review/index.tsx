import React, { useState, useEffect } from "react";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";
import Divider from "../../../components/common/Divider";
import PlayerList from "./components/PlayerList";
import Actions from "./components/Actions";
import Comment from "./components/Comment";
import Rating from "./components/Rating";
import Wrapper from "./components/Wrapper";

const Review = ({ route }: any) => {

  console.log('route.parms',route.parms)
  const { userGid, data, selectedUser } = route.params;
  const [review, setReview] = useState({
    players: selectedUser ? [selectedUser] : [],
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
      {/* <BackHeader title={"Valoración"} /> */}
      <Wrapper>
        <Divider height={12} />
        {!selectedUser && (
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