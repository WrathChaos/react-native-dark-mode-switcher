import React from "react";
import { SafeAreaView } from "react-native";
import { DarkModeSwitch } from "./lib/index";

const App = () => {
  const [isOn, setIsOn] = React.useState(false);

  const onChange = () => {
    setIsOn((d) => !d);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <DarkModeSwitch value={isOn} onChange={() => onChange()} />
    </SafeAreaView>
  );
};

export default App;
