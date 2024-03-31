import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  image: string;
  name: string;
  gid: number;
  onPress: (T: number) => void;
  selected: boolean;
}

const SportCard = ({ image, name, gid, onPress, selected = true }: Props) => {
  const clickHandler = () => {
    onPress(gid);
  };
  return (
    <TouchableOpacity onPress={clickHandler}>
      <ImageBackground
        style={[styles.container, selected && styles.selected]}
        source={{ uri: image }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.opacity} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SportCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 12,
    overflow: "hidden",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 12,
    zIndex: 3,
  },
  selected: { borderWidth: 2, borderColor: colors.primary },
  title: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.white,
  },
  opacity: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 0.3,
  },
});
