import React, { useEffect } from "react";
import styled from "styled-components";
import Summary from "../components/ui/dashboard/summary/Summary";
import TransactionsDisplay from "../components/ui/dashboard/transaction/TransactionsDisplay";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "../store/actions/trs";
import Alert from "../components/layout/Alert";

const Header = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: white;
  margin-left: 16px;
  font-family: PingFangSC-medium;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.85);
  > span {
    margin-left: 32px;
  }
`;

export const Container = styled.div`
  margin: 30px 24px 0 40px;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { trs } = useSelector((state) => state);

  useEffect(() => {
    if (trs.isLoading) {
      dispatch(loadTransactions());
    }
  }, [dispatch, trs.isLoading]);


  return (
    <>
      <Alert />
      <Header>
        <span>Transactions</span>
      </Header>
      {!trs.isLoading && (
        <Container>
          <Summary summaryLog={trs.summaryLog}/>
          <TransactionsDisplay />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
