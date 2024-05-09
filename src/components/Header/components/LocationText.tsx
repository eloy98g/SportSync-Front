import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";
import getAddress from "../../../utils/location/getAddress";
import getLocationPermissions from "../../../utils/location/getLocationPermissions";
import getLocation from "../../../utils/location/getLocation";
import { setLocation } from "../../../store/features/user/userSlice";

const LocationText = () => {
  const location = useAppSelector((state) => state.user.location);
  const [address, setAddress] = useState("");

  const dispatch = useAppDispatch();
  const addressHandler = async () => {
    const newAddress = await getAddress(location);
    setAddress(newAddress);
  };
  useEffect(() => {
    addressHandler();
  }, [location]);

  const locationHandler = async () => {
    const locationPermission = await getLocationPermissions();
    console.log("locationPermission", locationPermission);
    if (locationPermission) {
      const location = await getLocation();
      dispatch(setLocation(location));
    }
  };

  return (
    <View style={styles.container}>
      {location ? (
        <Text numberOfLines={1} style={styles.text}>Estás en {address}</Text>
      ) : (
        <TouchableOpacity onPress={locationHandler}>
          <Text style={styles.text}>
            {"Presiona aquí para obtener ubicación"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LocationText;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.grey,
  },
  container: {
    width: "100%",
    paddingHorizontal: 12,
  },
});
