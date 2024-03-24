import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import ActionButton from "../ActionButton";
import HomeSection from "../HomeSection";

const QuickActions = () => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const uploadScoreHandler = () => {};
  const participationHandler = () => {
    navigation.navigate("CodeScanScreen" as never);
  };

  const paddingHorizontal = 24;
  const dividerWidth = 20;
  const itemWidth = (width - paddingHorizontal) / 2 - dividerWidth;

  return (
    <HomeSection title="Acciones rápidas">
      <View style={styles.container}>
        <ActionButton
          width={itemWidth}
          height={itemWidth}
          title="Subir resultado"
          image={require("../../../../assets/images/actionButtons/score.jpg")}
          onPress={uploadScoreHandler}
        />
        <Divider width={dividerWidth} />
        <ActionButton
          title="Registrar participación"
          image={require("../../../../assets/images/actionButtons/code.png")}
          onPress={participationHandler}
        />
      </View>
    </HomeSection>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
