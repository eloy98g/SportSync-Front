import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import Wrapper from "./Wrapper.native";
import BackButton from "./BackButton";
import ActionsGroup from "./ActionsGroup";
import ProfileImage from "./ProfileImage";

// Theme
import { PHONE } from "../../../../../theme/breakPoints";

// Types
import User from "../../../../../store/types/User";

interface Props {
  data: User;
  isExternal: boolean;
}

const ProfileHeader = ({ data, isExternal }: Props) => {
  const { image } = data;
  return (
    <View style={styles.container}>
      <Wrapper />
      <View style={styles.content}>
        <View style={styles.actions}>
          <BackButton />
          <ActionsGroup isExternal={isExternal} />
        </View>
        <ProfileImage image={image} />
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 16,
    zIndex: 3,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
