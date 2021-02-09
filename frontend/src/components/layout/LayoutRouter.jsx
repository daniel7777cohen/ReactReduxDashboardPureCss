import React from "react";
import Dashboard from "../../pages/Dashboard";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import Billing from "../../pages/Billing";
import Topbar from "./Topbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid blue;

`;

const LayoutRouter = () => {
  return (
    <Container>
      <Topbar />
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/billing" component={Billing} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </Layout>
    </Container>
  );
};

export default LayoutRouter;
