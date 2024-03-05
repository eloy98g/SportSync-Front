import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ArrowRight } from "lucide-react-native";
import IconButton from "../../../../components/common/buttons/IconButton";

// Types
import Activity from "../../../../store/types/Activity";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import unixToDate from "../../../../utils/date/unixToDate";

const CurrentActivity = (props: Activity) => {
  const { sport, name, type, startDate } = props;

  const typeText = type === "competitive" ? "Competitiva" : "normal";
  const date = unixToDate(startDate);

  const clickHandler = () => {};

  return (
    <TouchableOpacity style={styles.container} onPress={clickHandler}>
      <Image style={styles.image} source={{ uri: sport.icon }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.typeText}>{typeText}</Text>
      <Text style={styles.typeText}>{date}</Text>
      <IconButton
        icon={<ArrowRight color={colors.grey} size={20} />}
        onPress={clickHandler}
      />
    </TouchableOpacity>
  );
};

export default CurrentActivity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontFamily: family.semibold,
    color: colors.black,
  },
  typeText: {
    fontSize: 16,
    fontFamily: family.semibold,
    color: colors.grey,
  },
});
