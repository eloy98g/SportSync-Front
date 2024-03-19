import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";

const Actions = ({ review }: any) => {
  const navigation = useNavigation();

  const cancelHandler = () => {
    navigation.goBack();
  };
  const acceptHandler = () => {
    // TODO: api call for sending review
  };
  return (
    <View style={styles.row}>
      <MainButton
        title="Cancelar"
        onPress={cancelHandler}
        borderColor={colors.primary}
        color={colors.white}
        textColor={colors.primary}
      />
      <Divider width={20} />
      <MainButton
        title="Aceptar"
        onPress={acceptHandler}
        color={colors.primary}
        textColor={colors.white}
      />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
