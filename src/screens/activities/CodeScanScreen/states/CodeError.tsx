import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Hooks
import { STATUS } from "../../../../hooks/useStatus";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<STATUS>>;
  error: string;
}

const CodeError = ({ setStatus, error }: Props) => {
  const handleBack = () => {
    setStatus("idle");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{error}</Text>
      <Divider height={40} />
      <View style={styles.buttonContainer}>
        <MainButton
          title="Intentalo de nuevo"
          onPress={handleBack}
          height={46}
        />
      </View>
    </View>
  );
};

export default CodeError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 24,
  },
});
