import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Content,
  getTheme,
  StyleProvider,
} from "native-base";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

import { loading } from "./reducer/appReducer";
import LexPons from "../constants/theme/App";

interface IProps {
  loading: boolean;
  navigation: any;
}

interface IState {
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getTheme(LexPons)}>
        <Container style={LexPons.paddingContainter}>
          <Content>
            <Grid>
              <Row>
                <Col>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoading: () => {
      return dispatch(loading());
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.app.loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
});
