import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../../theme/colors";

// Components
import StatusBar from "./components/StatusBar";

// Context
import CreateContext from "./context/CreateContext";

// Sections
import Sections from "./sections";

const Create = () => {
  const { section } = useContext(CreateContext);
  const currentSection =
    Sections.find((element) => element.name === section) ?? Sections[0];
  const { position, component } = currentSection;

  const value = ((position + 1) / Sections.length) * 100;

  console.log("value", value);
  return (
    <View style={styles.container}>
      <StatusBar value={value} />
      {component}
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 90,
    backgroundColor: colors.white,
  },
});
