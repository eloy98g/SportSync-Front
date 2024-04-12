import React from "react";
import { BookHeart } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

const SportPicker = () => {
  const navigation = useNavigation();
  const sportHandler = () => {
    navigation.navigate("FavoriteSportsScreen" as never);
  };
  return (
    <TouchableOpacity onPress={sportHandler} style={styles.titleWrapper}>
      <Text style={styles.title}>Deportes favoritos</Text>
      <BookHeart color={colors.black} size={18} />
    </TouchableOpacity>
  );
};

export default SportPicker;

const styles = StyleSheet.create({
  titleWrapper: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 46,
  },
  title: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
  },
});
