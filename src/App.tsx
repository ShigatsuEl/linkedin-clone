/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import Login from "./components/login";
import { Home } from "./components/home";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getUserAuth } from "./actions/userAction";

type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux;

function App(props: IProps) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
