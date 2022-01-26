import React from "react";
import { SafeAreaView } from "react-native";
import DarkModeSwitcher from "react-native-dark-mode-switcher";

const App = () => {
  const [switchValue, setSwitchValue] = React.useState(false);

  const onChange = () => {
    setSwitchValue((previousState: boolean) => !previousState);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <DarkModeSwitcher value={switchValue} onChange={() => onChange()} />
    </SafeAreaView>
  );
};

export default App;
