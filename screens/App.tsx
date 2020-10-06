import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Text, StyleProvider } from "native-base";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

import { loading } from "./reducer/appReducer";
import getTheme from "../theme/components";
import platform from "../theme/variables/platform";

interface IProps {
  loading: boolean;
  navigation: any;
}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.props.navigation.setOptions({
      title: "Starter",
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            <Grid>
              <Row>
                <Col>
                  <Text>Starter</Text>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoading: () => {
      return dispatch(loading());
    },
  };
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.app.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
});
