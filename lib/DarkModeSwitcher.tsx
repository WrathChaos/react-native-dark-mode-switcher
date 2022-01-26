import * as React from "react";
import {
  Animated,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _containerStyle,
  _knobStyle,
  _moonStyle,
} from "./DarkModeSwitcher.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IDarkModeSwitcherProps {
  style?: CustomStyleProp;
  containerStyle?: CustomStyleProp;
  moonStyle?: CustomStyleProp;
  knobStyle?: CustomStyleProp;
  size?: number;
  value: boolean;
  activeColor?: string;
  inactiveColor?: string;
  animationDuration?: number;
  animationEasing?: (value: number) => number;
  onChange: () => void;
}

const DarkModeSwitcher: React.FC<IDarkModeSwitcherProps> = ({
  style,
  value,
  size = 100,
  animationDuration = 200,
  containerStyle,
  moonStyle,
  animationEasing,
  knobStyle,
  activeColor = "#fff",
  inactiveColor = "#000",
  onChange,
}) => {
  const animationXAxis = React.useRef(new Animated.Value(0)).current;

  const animationFunc = React.useCallback(
    () => {
      Animated.timing(animationXAxis, {
        toValue: value ? size * 0.9 : 0,
        duration: animationDuration,
        easing: animationEasing,
        useNativeDriver: false,
      }).start();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  const backgroundColor = animationXAxis.interpolate({
    inputRange: [0, 50],
    outputRange: [activeColor, inactiveColor],
  });

  React.useEffect(() => {
    animationFunc();
  }, [animationFunc]);

  return (
    <>
      <TouchableWithoutFeedback
        style={[styles.container, style]}
        onPress={onChange}
      >
        <Animated.View
          style={[_containerStyle(size, backgroundColor), containerStyle]}
        >
          <Animated.View
            style={[
              _moonStyle(animationXAxis, size, backgroundColor),
              moonStyle,
            ]}
          />
          <Animated.View
            style={[[_knobStyle(animationXAxis, size), knobStyle]]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default DarkModeSwitcher;
