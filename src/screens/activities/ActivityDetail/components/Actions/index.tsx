import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import Divider from "../../../../../components/common/Divider";
import Card from "../../../../../components/common/Card";

// Theme
import colors from "../../../../../theme/colors";
import shareActivity from "../../methods/shareActivity";

// Activity
import Activity from "../../../../../store/types/Activity";

interface Props {
  data: Activity;
  playerView?: boolean;
  userGid?: number;
}

const Actions = ({ data, playerView, userGid }: Props) => {
  const navigation = useNavigation();

  const chatHandler = () => {};
  const shareHandler = async () => {
    await shareActivity(data);
  };

  const reviewHandler = () => {
    navigation.navigate("Review" as never, { userGid, data } as never);
  };

  return (
    <Card border={false}>
      <View style={styles.row}>
        {playerView && (
          <>
            <MainButton
              color={colors.white}
              textColor={colors.primary}
              height={40}
              title="Chat"
              onPress={chatHandler}
            />
            <Divider width={10} />
          </>
        )}
        <MainButton
          color={colors.white}
          textColor={colors.primary}
          title="Compartir"
          height={40}
          onPress={shareHandler}
        />
        {playerView && (
          <>
            <Divider width={10} />
            <MainButton
              color={colors.white}
              height={40}
              textColor={colors.primary}
              title="Valorar"
              onPress={reviewHandler}
            />
          </>
        )}
      </View>
    </Card>
  );
};

export default Actions;

const styles = StyleSheet.create({
  row: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
