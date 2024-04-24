import React from "react";

// Components
import Divider from "./Divider";

interface Props {
  height: number;
  color: string;
}

const LineDivider = ({ height, color }: Props) => {
  const realHeight = height / 2;
  return (
    <>
      <Divider height={realHeight} />
      <Divider height={1} width="100%" color={color} />
      <Divider height={realHeight} />
    </>
  );
};

export default LineDivider;
