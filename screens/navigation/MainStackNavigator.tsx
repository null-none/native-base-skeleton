import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducer from "../reducer/store";
import App from "../App";
import { navigationRef, isMountedRef } from "./RootNavigation";

const Stack = createStackNavigator();
const store = createStore(reducer, applyMiddleware(thunk));

function MainStackNavigator() {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MainStackNavigator;
