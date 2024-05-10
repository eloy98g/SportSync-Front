import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MapPin } from "lucide-react-native";

// Components
import Divider from "../../../../../components/common/Divider";

// Hooks
import useNavigate from "../../../../../hooks/useNavigate";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Types
import LocationT from "../../../../../store/types/location/Location";
import getAddress from "../../../../../utils/location/getAddress";

interface Props {
  location: LocationT;
}

const Location = ({ location }: Props) => {
  const [title, setTitle] = useState("");
  const { navigateTo } = useNavigate();

  const getTitle = async () => {
    const address = await getAddress(location);
    setTitle(address || "Selecciona ubicación");
  };

  useEffect(() => {
    getTitle();
  }, [location]);

  const locationHandler = () => {
    navigateTo("MapScreen", {
      mapHandler: () => {},
      option: "view",
      mapLocation: location,
    });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={locationHandler}>
      <Text style={styles.text}>{title}</Text>
      <Divider width={8} />
      <MapPin color={colors.grey} size={18} />
    </TouchableOpacity>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    flex: 0.6,
  },
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
    textAlign: "right",
  },
});
