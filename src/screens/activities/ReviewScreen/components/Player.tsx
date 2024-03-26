import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Types
import PlayerT from "../../../../store/types/activity/Player";

interface Props {
  data: PlayerT;
  onPress: () => void;
  selected: boolean;
}

const Player = ({ data, onPress, selected }: Props) => {
  const { image, name } = data;
  const containerStyle = [
    styles.container,
    selected && { backgroundColor: colors.primary },
  ];
  const textStyle = [styles.name, selected && { color: colors.white }];
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={textStyle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 4,
    flex: 1,
    height: 90,
    width: 70,
    borderRadius: 8,
    justifyContent: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  textContainer: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.grey,
    textAlign: "center",
  },
});
