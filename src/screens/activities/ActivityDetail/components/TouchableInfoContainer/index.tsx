import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import Icon from "../../../../../components/common/Icon";
import TouchableInfo from "./TouchableInfo";

// Theme
import colors from "../../../../../theme/colors";

const index = ({ data }: any) => {
  const { access, type } = data;

  const accessHandler = () => {};
  const typeHandler = () => {};

  const accessText =
    access === "public" ? "Actividad pública" : "Actividad privada";

  const typeText =
    type === "normal"
      ? "Esta partida no influirá a tu nivel"
      : "Las partidas competitivas influyen a tu nivel";

  return (
    <View style={styles.container}>
      <TouchableInfo
        icon={<Icon icon={access} size={24} color={colors.black} />}
        title={accessText}
        onPress={accessHandler}
      />
      <Divider height={18} />
      <TouchableInfo
        icon={<Icon icon={type} size={24} color={colors.black} />}
        title={typeText}
        onPress={typeHandler}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
