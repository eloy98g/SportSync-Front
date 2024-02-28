import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Sheet } from "@tamagui/sheet";

const AuthSheet = (props: any) => {
  const { section, setSection, children } = props;
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (section) {
      setOpen(true);
    }
  }, [section]);

  const openHandler = (value: boolean) => {
    if (value === false) {
      setSection();
      setOpen(false);
    }
  };

  return (
    <Sheet
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
      <Sheet.Overlay
        animation="100ms"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle />
      <Sheet.Frame
        padding="$3"
        justifyContent="center"
        alignItems="center"
        space="$5"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        {children}
      </Sheet.Frame>
    </Sheet>
  );
};

export default AuthSheet;

const styles = StyleSheet.create({});
