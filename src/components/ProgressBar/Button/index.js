import * as React from "react";
import { Button as RNButton, ProgressBar, Colors } from "react-native-paper";
import PointIcon from "../Icons/PointIcon";
import { checkFont } from "../utils";
const Button = ({
  attributes,
  onPress,
  loading,
  height,
  zIndex,
  dataBinding = [],
  value,
}) => {
  const {
    type,
    icon,
    opacity,
    backgroundColor,
    fontSize,
    color,
    borderRadius,
    text,
    upperCase,
    maxValue,
    progressValue,
    defaultHeight,
  } = attributes;
  // console.log("attributes", attributes);

  let progress = 0.5;
  if (!isNaN(+progressValue) && !isNaN(+maxValue)) {
    progress = +progressValue / +maxValue;
  }

  return (
    <ProgressBar
      style={{ height }}
      progress={progress}
      color={backgroundColor}
    />
  );
};

export default Button;
