import React from "react";
import { Minus, Plus } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

// Components
import ActionButton from "../../../../components/common/buttons/ActionButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  onAdd: () => void;
  onRemove: () => void;
  separation?: number;
  quantity: number;
}
const NumericSelector = ({
  onAdd,
  onRemove,
  separation = 40,
  quantity,
}: Props) => {
  return (
    <View style={styles.container}>
      <ActionButton
        size={42}
        icon={<Minus color={colors.white} size={25} />}
        onPress={onRemove}
      />
      <Divider width={separation} />
      <View style={styles.quantityWrapper}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
      <Divider width={separation} />
      <ActionButton
        size={42}
        icon={<Plus color={colors.white} size={25} />}
        onPress={onAdd}
      />
    </View>
  );
};

export default NumericSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    fontFamily: family.normal,
    color: colors.grey,
    fontSize: 35,
  },
  quantityWrapper: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
