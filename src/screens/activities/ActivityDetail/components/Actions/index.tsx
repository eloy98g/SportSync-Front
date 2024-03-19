import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import Divider from "../../../../../components/common/Divider";
import Card from "../../../../../components/common/Card";

// Theme
import colors from "../../../../../theme/colors";
import shareActivity from "../../methods/shareActivity";
import ReviewSheet from "../ReviewSheet";

interface Props {
  data: any;
  playerView?: boolean;
  userGid?: number;
}

const Actions = ({ data, playerView, userGid }: Props) => {
  const [reviewOpen, setReviewOpen] = useState(false);
  const chatHandler = () => {};
  const shareHandler = async () => {
    await shareActivity(data);
  };

  console.log('actions playerView',playerView)
  const reviewHandler = () => {
    setReviewOpen(true);
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
      <ReviewSheet
        open={reviewOpen}
        setOpen={setReviewOpen}
        data={data}
        userGid={userGid}
      />
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
