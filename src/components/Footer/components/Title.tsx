import React from "react";
import { Text } from "react-native";

// Constants
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";

const Title = ({ index, active }: any): any => {
  const color = active ? colors.primary : colors.black;
  const fontFamily = active ? family.bold : family.normal;

  const styles = { color, fontFamily, fontSize: 10 };
  switch (index) {
    case 0:
      return <Text style={styles}>Eventos</Text>;
    case 1:
      return <Text style={styles}>Pedidos</Text>;
    case 2:
      return <Text style={styles}>Perfil</Text>;
  }
};

export default Title;
