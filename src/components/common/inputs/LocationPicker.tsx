import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPin } from "lucide-react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

const LocationPicker = ({ value, setValue }: any) => {
  const navigation = useNavigation();
  const title = "Selecciona ubicación";

  const locationHandler = () => {};
  const mapHandler = () => {
    navigation.navigate("MapScreen" as never);
  };

  return (
    <TouchableOpacity onPress={mapHandler} style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <MapPin color={colors.black} size={18} />
    </TouchableOpacity>
  );
};

export default LocationPicker;

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
