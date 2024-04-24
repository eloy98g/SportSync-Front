import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, StyleSheet } from "react-native";

// Components
import ActionButton from "../ActionButton";
import HomeSection from "../HomeSection";

const OtherActions = () => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const paddingHorizontal = 24;
  const itemWidth = width - paddingHorizontal;
  const itemHeight = itemWidth / 2;

  const uploadScoreHandler = () => {};

  const tutorialHandler = () => {
    // navigation.navigate("CodeScanScreen" as never);
  };

  return (
    <HomeSection title="Otras acciones">
      <ActionButton
        width={itemWidth}
        height={itemHeight}
        title="Tutorial"
        image={require("../../../../assets/images/actionButtons/tutorial.png")}
        onPress={uploadScoreHandler}
      />
    </HomeSection>
  );
};

export default OtherActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
