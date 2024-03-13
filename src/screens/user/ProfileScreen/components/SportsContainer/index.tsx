import React from "react";
import { useContext } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

// Components
import SportsCarousel from "./components/SportsCarousel";
import SportStats from "./components/SportStats";

// Context
import { SportContainerContext } from "./context/SportContainerContext";

// Theme
import colors from "../../../../../theme/colors";
import Divider from "../../../../../components/common/Divider";

const SportsContainer = () => {
  const { status } = useContext(SportContainerContext);

  if (status === "idle" || status === "loading") {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SportsCarousel />
      <Divider height={10} />
      <SportStats />
    </View>
  );
};

export default SportsContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
