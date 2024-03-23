import React, { useState } from "react";
import { View, Text } from "react-native";
import { Sheet as TamaguiSheet } from "@tamagui/sheet";

// Theme
import colors from "../../theme/colors";

interface Props {
  open: boolean;
  modal: boolean;
  openHandler: (T: boolean) => void;
  children: any;
}

const Sheet = (props: Props) => {
  const { open, openHandler, children, modal } = props;
  const [position, setPosition] = useState(0);

  return (
    <TamaguiSheet
      dismissOnSnapToBottom
      forceRemoveScrollEnabled={open}
      modal={modal}
      open={open}
      snapPointsMode={"fit"}
      // position={position}
      // onPositionChange={setPosition}
      disableDrag
      onOpenChange={openHandler}
      zIndex={100_000}
      animation="medium"
    >
      <TamaguiSheet.Overlay
        animation="100ms"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
        backgrounded
        backgroundColor="rgba(0,0,0,0.2)"
      />
      <TamaguiSheet.Frame
        padding="$3"
        justifyContent="center"
        alignItems="center"
        space="$5"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        paddingHorizontal={24}
        backgroundColor={colors.white}
      >
        {children}
      </TamaguiSheet.Frame>
    </TamaguiSheet>
  );
};

Sheet.defaultProps = {
  modal: true,
};
export default Sheet;
