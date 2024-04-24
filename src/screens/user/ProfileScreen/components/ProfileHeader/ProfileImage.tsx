import React from "react";
import { useWindowDimensions, StyleSheet, Image } from "react-native";

const ProfileImage = ({ image }: any) => {
  const width = useWindowDimensions().width;
  return (
    <Image
      style={[styles.image, { left: width * 0.5 - 60 }]}
      source={{ uri: image || "https://cdn-icons-png.flaticon.com/512/10337/10337609.png" }}
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
