import React from "react";
import { StyleSheet, View } from "react-native";
import { Settings, BadgeAlert, PenLine } from "lucide-react-native";

import IconButton from "../../../../../components/common/buttons/IconButton";
import colors from "../../../../../theme/colors";
import Divider from "../../../../../components/common/Divider";

interface Props {
  isExternal: boolean;
}
const ActionsGroup = ({ isExternal }: Props) => {
  const settingHandler = () => {};
  const reportHandler = () => {};
  const editHandler = () => {};

  return (
    <View style={styles.group}>
      {isExternal ? (
        <IconButton
          onPress={reportHandler}
          icon={<BadgeAlert size={24} color={colors.white} />}
        />
      ) : (
        <>
          <IconButton
            onPress={editHandler}
            icon={<PenLine size={24} color={colors.white} />}
          />
          <Divider width={10} />
          <IconButton
            onPress={settingHandler}
            icon={<Settings size={24} color={colors.white} />}
          />
        </>
      )}
    </View>
  );
};

export default ActionsGroup;

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
});
