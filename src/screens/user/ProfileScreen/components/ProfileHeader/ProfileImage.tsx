import React from "react";
import { useWindowDimensions, StyleSheet, Image } from "react-native";
import PROFILE_IMAGE from "../../../../../constants/PROFILE_IMAGE";

interface Props {
  image: string;
}
const ProfileImage = ({ image }: Props) => {
  const width = useWindowDimensions().width;
  const uri =
    image || PROFILE_IMAGE;
  return (
    <Image
      style={[styles.image, { left: width * 0.5 - 60 }]}
      source={{
        uri,
      }}
    />
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: "absolute",
    top: 90,
  },
});
