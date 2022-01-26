import * as React from "react";
import {
  Animated,
  StyleProp,
  ViewStyle,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _containerStyle,
  _knobStyle,
  _moonStyle,
} from "./DarkModeSwitch.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IDarkModeSwitchProps {
  style?: CustomStyleProp;
  containerStyle?: CustomStyleProp;
  moonStyle?: CustomStyleProp;
  knobStyle?: CustomStyleProp;
  size?: number;
  value: boolean;
  activeColor?: string;
  inactiveColor?: string;
  animationDuration?: number;
  onChange: (isActive: boolean) => void;
}

const DarkModeSwitch: React.FC<IDarkModeSwitchProps> = ({
  style,
  size = 100,
  value,
  animationDuration = 200,
  containerStyle,
  moonStyle,
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
        useNativeDriver: false,
      }).start();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  const backgroundColor: string = animationXAxis.interpolate({
    inputRange: [0, 90],
    outputRange: [activeColor, inactiveColor],
  });

  React.useEffect(() => {
    animationFunc();
  }, [animationFunc]);

  return (
    <>
      <TouchableWithoutFeedback
        style={[styles.container, style]}
        onPress={() => onChange(true)}
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

export default DarkModeSwitch;
