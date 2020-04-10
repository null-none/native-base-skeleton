import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";


import MainStackNavigator from "./screens/navigation/MainStackNavigator";

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "Segoe-UI": require("./assets/fonts/Segoe-UI.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return <MainStackNavigator />;
  }
}
