import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Sheet as TamaguiSheet } from "@tamagui/sheet";

const Sheet = (props: any) => {
  const { open, openHandler, children } = props;
  const [position, setPosition] = useState(0);

  return (
    <TamaguiSheet
      dismissOnSnapToBottom
      forceRemoveScrollEnabled={open}
      modal
      open={open}
      snapPoints={[440, 0]}
      snapPointsMode={"constant"}
      position={position}
      onPositionChange={setPosition}
      disableDrag
      onOpenChange={openHandler}
      zIndex={100_000}
      animation="medium"
    >
      <TamaguiSheet.Overlay
        animation="100ms"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <TamaguiSheet.Handle />
      <TamaguiSheet.Frame
        padding="$3"
        justifyContent="center"
        alignItems="center"
        space="$5"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        {children}
      </TamaguiSheet.Frame>
    </TamaguiSheet>
  );
};

export default Sheet;

const styles = StyleSheet.create({});
