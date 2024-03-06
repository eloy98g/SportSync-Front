import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import Wrapper from "./Wrapper";
import BackButton from "./BackButton";
import ProfileImage from "./ProfileImage";

import User from "../../../../../store/types/User";

interface Props {
  data: User;
  isExternal: boolean;
}

const ProfileHeader = ({ data, isExternal }: Props) => {
  const { image } = data;
  return (
    <View style={styles.container}>
      <Wrapper>
        <View style={styles.actions}>
          <BackButton />
          <BackButton />
        </View>
      </Wrapper>
      <ProfileImage image={image}/>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 1,
  },
});
