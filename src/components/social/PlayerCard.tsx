import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Components
import IconButton from "../common/buttons/IconButton";
import Divider from "../common/Divider";

// Hooks
import { useAppDispatch, useAppSelector } from "../../hooks";
import useNavigate from "../../hooks/useNavigate";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import Player from "../../store/types/activity/Player";

// Store
import {
  followPlayer,
  unfollowPlayer,
} from "../../store/features/following/followingSlice";
import PROFILE_IMAGE from "../../constants/PROFILE_IMAGE";

interface Props {
  data: Player;
}

const PlayerCard = ({ data }: Props) => {
  const { image, name, verified, gid } = data;
  const friendList = useAppSelector((state) => state.following.following);
  const followed = friendList.some((user: Player) => user.gid === gid);
  const dispatch = useAppDispatch();
  const { navigateTo } = useNavigate();

  const followHandler = () => {
    if (followed) {
      dispatch(unfollowPlayer(gid));
    } else {
      dispatch(followPlayer(data));
    }
  };

  const profileHandler = () => {
    navigateTo("Profile", { gid: gid });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={profileHandler}>
        <Image style={styles.image} source={{ uri: image || PROFILE_IMAGE }} />
        <Divider width={12} />
        <Text style={styles.name}>{name}</Text>
        <Divider width={12} />
        {verified && (
          <Image
            style={styles.verified}
            source={require("../../assets/images/verified.png")}
          />
        )}
      </TouchableOpacity>
      <IconButton
        onPress={followHandler}
        borderStyle={{
          radius: 40,
          color: colors.primary,
        }}
        padding
        textStyle={styles.buttonText}
        distance={0}
        text={followed ? "Dejar de seguir" : "Seguir"}
      />
    </View>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  verified: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
  },
  buttonText: {
    fontFamily: family.bold,
    color: colors.primary,
    fontSize: 12,
  },
});
