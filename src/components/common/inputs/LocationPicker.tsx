import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MapPin } from "lucide-react-native";

// Hooks
import { useAppSelector } from "../../../hooks";
import useNavigate from "../../../hooks/useNavigate";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

// Types
import MapOption from "../../../store/types/location/MapOption";
import Location from "../../../store/types/location/Location";
import getAddress from "../../../utils/location/getAddress";

interface Props {
  location: Location;
  setValue: any;
  option?: MapOption;
}

const LocationPicker = ({ location, setValue, option }: Props) => {
  const userLocation = useAppSelector((state) => state.user.user).location;
  const [title, setTitle] = useState(
    userLocation?.address || "Selecciona ubicación"
  );
  const { navigateTo } = useNavigate();

  const getTitle = async () => {
    const address = await getAddress(location);
    setTitle(address || "Selecciona ubicación");
  };

  useEffect(() => {
    getTitle();
  }, [location]);

  const mapLocation: Location = location || {
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
    radius: 500
  };

  const mapHandler = () => {
    navigateTo("MapScreen", { mapHandler: setValue, option, mapLocation });
  };

  return (
    <TouchableOpacity onPress={mapHandler} style={styles.titleWrapper}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <MapPin color={colors.black} size={18} />
    </TouchableOpacity>
  );
};

LocationPicker.defaultProps = {
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
