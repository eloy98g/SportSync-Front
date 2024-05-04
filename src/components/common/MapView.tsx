import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MapPinned } from "lucide-react-native";

// Hooks
import useNavigate from "../../hooks/useNavigate";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import Location from "../../store/types/location/Location";

interface Props {
  location: Location;
}

const MapView = ({ location }: Props) => {
  const { navigateTo } = useNavigate();
  const title = "Ver mapa";

  const mapHandler = () => {
    navigateTo("MapScreen", {
      mapHandler: () => {},
      option: "view",
      mapLocation: location,
    });
  };

  return (
    <TouchableOpacity onPress={mapHandler} style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <MapPinned color={colors.black} size={18} />
    </TouchableOpacity>
  );
};

export default MapView;

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
