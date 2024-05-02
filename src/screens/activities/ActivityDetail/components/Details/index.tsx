import React from "react";
import { StyleSheet, View } from "react-native";

// Theme
import colors from "../../../../../theme/colors";
import DetailItem from "./DetailItem";

// Utils
import getFormattedPrice from "../../../../../utils/currency/getFormattedPrice";

// Types
import Activity from "../../../../../store/types/activity/Activity";

interface Props {
  data: Activity;
}

const Details = ({ data }: Props) => {
  const { playersPerTeam, price, type } = data;

  const playersText = playersPerTeam + " vs " + playersPerTeam;
  const priceText = price > 0 ? getFormattedPrice(price) + " c/u": "Gratis";
  const typeText = type === "normal" ? "Normal" : "Competitivo";
  const sizeText = type === "normal" ? 24 : 20;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <DetailItem title={playersText} subtitle="Jugadores" />
        <DetailItem title={priceText} subtitle="Precio" />
        <DetailItem title={typeText} subtitle="Tipo" size={sizeText} />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingHorizontal: 24,
    zIndex: 11,
  },
  container: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: colors.lightenGrey,
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 12,
  },
});
