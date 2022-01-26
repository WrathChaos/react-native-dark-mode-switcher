import { ViewStyle, StyleSheet } from "react-native";

export const _containerStyle = (
  size: number,
  backgroundColor: any,
): ViewStyle => ({
  width: size * 1,
  height: size * 0.5,
  borderWidth: 2,
  padding: size * 0.05,
  borderRadius: size * 0.25,
  borderColor: "#ffab40",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: backgroundColor,
});

export const _moonStyle = (
  animationXAxis: any,
  size: number,
  backgroundColor: any,
): ViewStyle => ({
  position: "absolute",
  width: size * 0.4,
  height: size * 0.25,
  zIndex: 10,
  top: size * 0.09,
  marginLeft: size * -0.5,
  borderBottomLeftRadius: size * 0.25,
  borderBottomRightRadius: size * 0.2,
  borderTopRightRadius: size * 0.05,
  backgroundColor: backgroundColor,
  transform: [
    { translateX: animationXAxis },
    {
      rotate: animationXAxis.interpolate({
        inputRange: [0, size * 0.9],
        outputRange: ["0deg", "-45deg"],
      }),
    },
  ],
  opacity: animationXAxis.interpolate({
    inputRange: [size * 0.4, size * 0.5, size * 0.7],
    outputRange: [0, 0, 1],
  }),
});

export const _knobStyle = (animationXAxis: any, size: number): ViewStyle => ({
  right: 3,
  width: size * 0.36,
  height: size * 0.36,
  backgroundColor: "#ffab40",
  borderRadius: size * 0.18,
  transform: [
    {
      translateX: animationXAxis.interpolate({
        inputRange: [0, size * 0.9],
        outputRange: [0, size * 0.51],
      }),
    },
  ],
});

export default StyleSheet.create({
  container: {},
});
