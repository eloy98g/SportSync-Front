import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import Divider from "../../../../../components/common/Divider";

// Methods
import isActivityFull from "../../methods/isActivityFull";

// Theme
import colors from "../../../../../theme/colors";

const JoinButton = ({ data }: any) => {
  const joinHandler = () => {
    // TODO: api call for joining
  };

  if (data.status === "pending" && !isActivityFull(data)) {
    return (
      <>
        <MainButton
          color={colors.secondary}
          textColor={colors.white}
          height={50}
          title="Únete"
          onPress={joinHandler}
        />
        <Divider height={18} />
      </>
    );
  }

  return <View></View>;
};

export default JoinButton;

const styles = StyleSheet.create({});
