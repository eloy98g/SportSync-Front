import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import MainButton from "../../../components/common/buttons/MainButton";
import Card from "../../../components/common/Card";
import Divider from "../../../components/common/Divider";
import TextInput from "../../../components/common/inputs/TextInput";
import Screen from "../../../components/common/Screen";
import useStatus from "../../../hooks/useStatus";
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";
import validCode from "./methods/validCode";

const ActivityCodeScreen = () => {
  const [code, setCode] = useState("");
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const buttonActive = validCode(code);

  const codeHandler = () => {
    // TODO: Api call to join activity by code
    setStatus("loading");
    setError("");
    setTimeout(() => {
      // Placeholder
      const response = { status: "success", activity: 1 };
      if (response.status === "success") {
        setStatus("success");
        navigation.navigate(
          "ActivityDetail" as never,
          { gid: response.activity } as never
        );
      } else {
        setStatus("error");
        setError("Error de lectura");
      }
    }, 500);
  };

  return (
    <Screen>
      <BackHeader title="Introduce un código" />
      <View style={styles.content}>
        <Card title="Introduce un código" border={false}>
          <TextInput onChange={setCode} value={code} placeholder="#XXXXX" />
          <Divider height={24} />
          <View style={styles.button}>
            <MainButton
              active={buttonActive}
              title="Aceptar"
              onPress={codeHandler}
              loading={status === "loading"}
            />
          </View>
          {status === "error" && <Divider height={12} />}
          {status === "error" && <Text style={styles.error}>{error}</Text>}
        </Card>
      </View>
    </Screen>
  );
};

export default ActivityCodeScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    paddingHorizontal: 12,
  },
  button: {
    height: 50,
  },
  error: {
    fontFamily: family.normal,
    color: colors.red,
    fontSize: 14,
  },
});
