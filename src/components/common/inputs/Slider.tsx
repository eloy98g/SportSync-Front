import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slider as TMSlider, XStack } from "tamagui";

interface Props {
  children?: any;
  defaultValue: number;
  max: number;
  step: number;
  orientation?: "vertical" | "horizontal";
  onChange: (T:any) => void;
}

const Slider = ({
  children,
  defaultValue,
  max,
  step,
  orientation,
  onChange,
  ...props
}: Props) => {
  return (
    <TMSlider
      defaultValue={[defaultValue]}
      onValueChange={onChange}
      max={max}
      step={step}
      orientation={orientation}
      {...props}
    >
      <TMSlider.Track>
        <TMSlider.TrackActive />
      </TMSlider.Track>
      <TMSlider.Thumb index={0} circular elevate />
      {children}
    </TMSlider>
  );
};

Slider.defaultProps = {
  orientation: "horizontal",
};

export default Slider;

const styles = StyleSheet.create({});
