import React from "react";
import { StyleSheet, View } from "react-native";
import { Share2, MessageCircleMore, UserRoundCog } from "lucide-react-native";

// Components
import IconButton from "../../../../../components/common/buttons/IconButton";
import Divider from "../../../../../components/common/Divider";

// Theme
import colors from "../../../../../theme/colors";
import shareActivity from "../../methods/shareActivity";

interface Props {
  isAdmin: boolean;
  playerView?: boolean;
  data: any;
}

const ActionsGroup = ({ isAdmin, data, playerView }: Props) => {
  const chatHandler = () => {};
  const adminHandler = () => {};
  const shareHandler = async () => {
    await shareActivity(data);
  };

  // Todo: logicas administrador
  return (
    <View style={styles.group}>
      {isAdmin && (
        <>
          <IconButton
            onPress={adminHandler}
            icon={<UserRoundCog size={24} color={colors.white} />}
          />
          <Divider width={8} />
        </>
      )}

      <IconButton
        onPress={shareHandler}
        icon={<Share2 size={24} color={colors.white} />}
      />
      {playerView && (
        <>
          <Divider width={10} />
          <IconButton
            onPress={chatHandler}
            icon={<MessageCircleMore size={24} color={colors.white} />}
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
