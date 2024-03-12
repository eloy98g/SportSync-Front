import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Components
import Divider from "../../../../../../components/common/Divider";

// Theme
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";

// Types
import Sport from "../../../../../../store/types/Sport";

interface Props {
  sport: Sport;
  onPress: any;
  selected: boolean;
}

const SportItem = ({ sport, onPress, selected }: Props) => {
  const { icon, name, gid } = sport;
  console.log("selected", selected);
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(gid)}>
      <View
        style={[
          styles.iconWrapper,
          selected && { backgroundColor: colors.primary },
        ]}
      >
         <Image style={styles.image} source={{ uri: icon }} />
      </View>
      <Divider height={4} />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SportItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
  },
  image: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    fill:"white"
  },
  title: {
    fontFamily: family.light,
    color: colors.primary,
    fontSize: 12,
  },
});
