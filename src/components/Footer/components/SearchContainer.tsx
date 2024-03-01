import React from "react";
import { StyleSheet, View } from "react-native";
import { Hash, Plus, Search } from "lucide-react-native";

// Components
import IconButton from "../../common/buttons/IconButton";
import Divider from "../../common/Divider";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

const SearchContainer = () => {
  return (
    <View style={styles.container}>
      <IconButton
        icon={<Search color={colors.primary} size={22} />}
        text="Buscar Actividad"
        onPress={() => {}}
        textStyle={styles.text}
      />
      <Divider height={10} />
      <IconButton
        icon={<Plus color={colors.primary} size={24} />}
        text="Crear Actividad"
        onPress={() => {}}
        textStyle={styles.text}
      />
      <Divider height={10} />
      <IconButton
        icon={<Hash color={colors.primary} size={24} />}
        text="Tengo un código"
        onPress={() => {}}
        textStyle={styles.text}
      />
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({
  container: {
    width: 300,
    paddingHorizontal: 22,
    paddingVertical: 18,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: 22,
    fontFamily: family.semibold,
  },
});
