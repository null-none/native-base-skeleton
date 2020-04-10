import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import reducer from "../reducer/store";
import App from "../App";

const Stack = createStackNavigator();
const store = createStore(reducer, applyMiddleware(thunk));

function MainStackNavigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={App}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MainStackNavigator;
