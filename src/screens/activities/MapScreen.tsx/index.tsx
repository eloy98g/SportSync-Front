import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

const MapScreen = () => {
  return (
    <Screen>
      <BackHeader title={"Selecciona tu zona"} />
      <View style={styles.container}>
        <MapView
          style={StyleSheet.absoluteFill}
          // initialRegion={INITIAL_REGION}
          provider={PROVIDER_GOOGLE}
        />
      </View>
    </Screen>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    width:"100%",height: "100%",
    paddingTop: 80,
  },
});
