import React from "react";
import { StackProps, YStack } from "tamagui";

// Theme
import colors from "../../../../../../theme/colors";

const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor={colors.grey}
      opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: colors.primary,
        opacity: 1,
      })}
      {...props}
    />
  );
};

export default TabsRovingIndicator;
