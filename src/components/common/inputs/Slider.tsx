import React from "react";
import { StyleSheet } from "react-native";
import { Slider as TMSlider } from "tamagui";

interface Props {
  children?: React.JSX.Element;
  defaultValue: number;
  max: number;
  step: number;
  orientation?: "vertical" | "horizontal";
  onChange: (T: number[]) => void;
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
