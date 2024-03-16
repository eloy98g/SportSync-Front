import React, { useState } from "react";
import { Sheet as TamaguiSheet } from "@tamagui/sheet";

// Theme
import colors from "../../theme/colors";

interface Props {
  open: boolean;
  openHandler: (T: boolean) => void;
  children: any;
  height: number;
}

const Sheet = (props: Props) => {
  const { open, openHandler, children, height } = props;
  const [position, setPosition] = useState(0);

  return (
    <TamaguiSheet
      dismissOnSnapToBottom
      forceRemoveScrollEnabled={open}
      modal
      open={open}
      snapPoints={[height, 0]}
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

export default Sheet;
