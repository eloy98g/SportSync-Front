import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Scanner from "../../../components/common/inputs/Scanner";
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import colors from "../../../theme/colors";

const CodeScanScreen = () => {
  const [value, setValue] = useState<string | null>(null);
  const userGid = useAppSelector((state) => state.user.user.gid);

  const codeHandler = (val: string) => {
    setValue(val);
  };

  return (
    <Screen>
      <BackHeader title="Escanear Código" />
      <Divider height={80} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Scanner setValue={codeHandler} />
        </View>
      </View>
    </Screen>
  );
};

export default CodeScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  content: {
    width: 300,
    height: 300,
  },
});
