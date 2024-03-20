import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Components
import Distance from "./Distance";
import Divider from "../../../../components/common/Divider";
import colors from "../../../../theme/colors";
import DISTANCES from "../DISTANCES";
import { family } from "../../../../theme/fonts";
import MainButton from "../../../../components/common/buttons/MainButton";

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
        {DISTANCES.map((item: any) => (
          <>
            <Distance
              key={item.gid}
              {...item}
              selected={selected === item.gid}
              onPress={() => onPress(item)}
            />
            <Divider width={12} />
          </>
        ))}
      </ScrollView>
      <Divider height={24} />
      <View style={styles.wrapper}>
        <MainButton title="Aceptar" fontSize={18}/>
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
