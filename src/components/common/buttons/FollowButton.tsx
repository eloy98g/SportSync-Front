import React, { useState } from "react";
import { StyleSheet } from "react-native";

// Components
import ErrorModal from "../../modals/ErrorModal";
import useStatus from "../../../hooks/useStatus";
import IconButton from "./IconButton";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";

// Services
import Api from "../../../services/api";

// Store
import {
  followPlayer,
  unfollowPlayer,
} from "../../../store/features/following/followingSlice";

// Types
import Player from "../../../store/types/activity/Player";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  player: Player;
  color?: string;
}

const FollowButton = ({ player, color = colors.primary }: Props) => {
  const { gid: playerGid } = player;

  const [error, setError] = useState("");
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");

  const friendList = useAppSelector((state) => state.following.following);
  const userGid = useAppSelector((state) => state.user.user.gid);
  const followed = friendList.some((user: Player) => user.gid === playerGid);

  const dispatch = useAppDispatch();

  const followHandler = async () => {
    try {
      const response = await Api.user.follow(userGid, playerGid);
      if (response.status === "success") {
        dispatch(followPlayer(player));
      } else {
        setError(response.message);
        setModal("Error");
      }
    } catch (error: any) {
      setError(error.message);
      setModal("Error");
    }
  };

  const unfollowHandler = async () => {
    try {
      const response = await Api.user.unfollow(userGid, playerGid);
      if (response.status === "success") {
        dispatch(unfollowPlayer(playerGid));
      } else {
        setError(response.message);
        setModal("Error");
      }
    } catch (error: any) {
      setError(error.message);
      setModal("Error");
    }
  };
  const socialHandler = async () => {
    setStatus("loading");
    if (followed) {
      await unfollowHandler();
    } else {
      await followHandler();
    }
    setStatus("idle");
  };

  return (
    <>
      <IconButton
        onPress={socialHandler}
        borderStyle={{
          radius: 40,
          color,
        }}
        loading={status === "loading"}
        loadingColor={color}
        padding
        textStyle={[styles.buttonText, { color }]}
        distance={0}
        text={followed ? "Dejar de seguir" : "Seguir"}
      />
      <ErrorModal
        setVisible={setModal}
        visible={modal === "Error"}
        error={error}
      />
    </>
  );
};

export default FollowButton;

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: family.bold,
    fontSize: 12,
  },
});
