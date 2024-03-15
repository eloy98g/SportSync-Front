import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

const Player = ({ data }: any) => {
  const { image, name } = data;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Divider height={4} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.grey,
  },
});
