import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Circle,
  LatLng,
} from "react-native-maps";

// Components
import MainButton from "../../../components/common/buttons/MainButton";
import BackHeader from "../../../components/BackHeader";
import DistanceSelector from "./components/DistanceSelector";
import Screen from "../../../components/common/Screen";

// Theme
import colors, { rgbaPrimary } from "../../../theme/colors";

// Types
import MAP_EVENT_TYPE from "../../../store/types/location/MapEventType";

const MapScreen = ({ route }: any) => {
  const { mapHandler, option, mapLocation } = route.params;
  const [markerPosition, setMarkerPosition] = useState<LatLng>({
    ...mapLocation,
  });
  const [radius, setRadius] = useState(mapLocation.radius);
  const [showButton, setShowButton] = useState(false);

  const navigation = useNavigation();

  const handleMapPress = (event: MAP_EVENT_TYPE) => {
    console.log("handleMapPress");
    const { coordinate } = event.nativeEvent;
    setMarkerPosition(coordinate);
    if (option === "radius") {
      mapHandler({ coordinates: coordinate, radius });
    } else {
      mapHandler(coordinate);
      setShowButton(true);
    }
  };

  const radiusHandler = (value: number) => {
    console.log("radiusHandler", value);
    setRadius(value);
  };

  const backHandler = () => {
    navigation.goBack();
    mapHandler({ radius });
  };

  return (
    <Screen>
      <BackHeader title={"Selecciona tu zona"} />
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={mapLocation}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          onPress={option !== "view" ? handleMapPress : () => {}}
        >
          {markerPosition && (
            <>
              <Marker
                coordinate={markerPosition}
                onPress={handleMapPress}
                pinColor={colors.primary}
              />
              {option === "radius" && (
                <Circle
                  center={markerPosition}
                  radius={radius}
                  fillColor={rgbaPrimary(0.2)}
                  strokeColor={rgbaPrimary(0.9)}
                  strokeWidth={2}
                />
              )}
            </>
          )}
        </MapView>
        {option === "radius" && (
          <DistanceSelector
            onPress={radiusHandler}
            selected={radius}
            onFinish={backHandler}
          />
        )}
        {showButton && (
          <View style={styles.wrapper}>
            <MainButton title="Aceptar" fontSize={18} onPress={backHandler} />
          </View>
        )}
      </View>
    </Screen>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 80,
  },
  radiusSelector: {
    backgroundColor: colors.white,
    padding: 40,
    zIndex: 2,
  },
  wrapper: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    paddingHorizontal: 12,
    position: "absolute",
    bottom: 12,
    backgroundColor: "transparent",
    zIndex: 10,
  },
});
