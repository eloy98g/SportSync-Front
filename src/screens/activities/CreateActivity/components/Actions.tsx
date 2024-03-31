import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  leftAction: () => void;
  rightAction: () => void;
  leftTitle: string;
  rightTitle: string;
  showLeft: boolean;
}

const Actions = ({
  showLeft = true,
  leftAction,
  rightAction,
  leftTitle = "",
  rightTitle = "",
}: Props) => {
  return (
    <View style={styles.container}>
      {showLeft && (
        <MainButton
          title={leftTitle}
          onPress={leftAction}
          color={colors.white}
          textColor={colors.primary}
        />
      )}
      {showLeft && <Divider width={20} />}
      <MainButton title={rightTitle} onPress={rightAction} />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 12,
  },
});
