import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { Component } from "react";
import { Root } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import MainStackNavigator from "./screens/navigation/MainStackNavigator";

interface IProps {}

interface IState {
  loading: boolean;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView>
          <AppLoading />
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView>
          <Root>
            <MainStackNavigator />
          </Root>
        </SafeAreaView>
      );
    }
  }
}
