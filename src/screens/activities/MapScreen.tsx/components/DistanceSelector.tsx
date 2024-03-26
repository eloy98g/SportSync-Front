import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";
import Distance from "./Distance";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

import DISTANCES from "../DISTANCES";
import DistanceT from "../../../../store/types/location/Distance";

interface Props {
  onPress: (T: any) => void;
  selected: number;
}

const DistanceSelector = ({ onPress, selected }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distancia</Text>
      <Divider height={12} />
      <ScrollView
        style={styles.row}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Divider width={12} />
        {DISTANCES.map((item: DistanceT) => (
          <React.Fragment key={item.gid}>
            <Distance
              {...item}
              selected={selected === item.gid}
              onPress={() => onPress(item)}
            />
            <Divider width={12} />
          </React.Fragment>
        ))}
      </ScrollView>
      <Divider height={24} />
      <View style={styles.wrapper}>
        <MainButton title="Aceptar" fontSize={18} onPress={onPress} />
      </View>
    </View>
  );
};

export default DistanceSelector;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.grey,
    paddingLeft: 12,
  },
  wrapper: {
    paddingHorizontal: 12,
    width: "100%",
    height: 46,
  },
});
