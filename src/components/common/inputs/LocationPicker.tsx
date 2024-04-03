import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPin } from "lucide-react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";
import MapOption from "../../../store/types/location/MapOption";
import Location from "../../../store/types/location/Location";

// TODO: this must be user's location
const INITIAL_REGION = {
  latitude: 36.53485636626119,
  longitude: -6.293364831231988,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

interface Props {
  value: any;
  setValue: any;
  option?: MapOption;
  initialLocation: Location;
}

const LocationPicker = ({
  value,
  setValue,
  option,
  initialLocation,
}: Props) => {
  const navigation = useNavigation();
  const title = "Selecciona ubicación"; // TODO: añadir nombre por lat y lng

  const mapHandler = () => {
    navigation.navigate(
      "MapScreen" as never,
      { mapHandler: setValue, option, initialLocation } as never
    );
  };

  return (
    <TouchableOpacity onPress={mapHandler} style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <MapPin color={colors.black} size={18} />
    </TouchableOpacity>
  );
};

LocationPicker.defaultProps = {
  initialLocation: INITIAL_REGION,
  option: "location",
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
