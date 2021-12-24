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
  // const {
  //   type,
  //   icon,
  //   opacity,
  //   backgroundColor,
  //   fontSize,
  //   color,
  //   borderRadius,
  //   text,
  //   upperCase,
  // } = attributes;
  console.log("attributes", attributes);

  return <ProgressBar progress={0.5} color={Colors.red800} />;
};

export default Button;
