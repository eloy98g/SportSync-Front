import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import Sheet from "../../../../../components/common/Sheet";
import Actions from "./components/Actions";
import Comment from "./components/Comment";
import PlayerList from "./components/PlayerList";
import Rating from "./components/Rating";
import Wrapper from "./components/Wrapper";

interface Props {
  userGid: number;
  open: boolean;
  setOpen: (T: any) => void;
  data: any;
  selectedUser?: number;
}

const ReviewSheet = ({ userGid, open, setOpen, data, selectedUser }: Props) => {
  const height = useWindowDimensions().height;
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
    <Sheet open={open} openHandler={setOpen} height={height - 100}>
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
        <Comment />
        <Divider height={24} />
        <Actions />
        <Divider height={12} />
      </Wrapper>
    </Sheet>
  );
};

export default ReviewSheet;
