import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from "react-native-maps";

// Components
import BackHeader from "../../../components/BackHeader";
import Slider from "../../../components/common/inputs/Slider";
import Screen from "../../../components/common/Screen";

// Theme
import colors, { rgbaPrimary } from "../../../theme/colors";
import DistanceSelector from "./components/DistanceSelector";

// TODO: this must be user's location
const INITIAL_REGION = {
  latitude: 36.53485636626119,
  longitude: -6.293364831231988,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

const MapScreen = () => {
  const [markerPosition, setMarkerPosition] = useState(INITIAL_REGION);
  const [radius, setRadius] = useState({ value: 500, gid: 1 });

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    console.log(" event.nativeEvent", coordinate);
    setMarkerPosition(coordinate);
  };

  const radiusHandler = ({ value, gid }: any) => {
    setRadius({ value, gid });
  };
  
  return (
    <Screen>
      <BackHeader title={"Selecciona tu zona"} />
      <View style={styles.container}>
        <MapView
          style={{flex:1}}
          initialRegion={INITIAL_REGION}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          onPress={handleMapPress}
        >
          {markerPosition && (
            <>
              <Marker
                coordinate={markerPosition}
                onPress={handleMapPress}
                pinColor={colors.primary}
              />
              <Circle
                center={markerPosition}
                radius={radius.value}
                fillColor={rgbaPrimary(0.2)}
                strokeColor={rgbaPrimary(0.9)}
                strokeWidth={2}
              />
            </>
          )}
        </MapView>
        <DistanceSelector onPress={radiusHandler} selected={radius.gid} />
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
});
