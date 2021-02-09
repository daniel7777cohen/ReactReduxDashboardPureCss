import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/layout/Sidebar";
import LayoutRouter from "./components/layout/LayoutRouter";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import "./index.css";

const Container = styled.div`
  background-color: #f0f2f5;
  display: flex;
  min-height: 900px;
  padding-bottom: 91px;
`;

const App = () => {
  
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Sidebar />
          <LayoutRouter />
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
