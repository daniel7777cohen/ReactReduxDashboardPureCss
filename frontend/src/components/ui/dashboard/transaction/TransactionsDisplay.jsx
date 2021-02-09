import React from "react";
import Search from "./search/Search";
import TransactionLog from "./log/TransactionLog";

const TransactionsDisplay = () => {
  return (
    <>
      <Search />
      <TransactionLog />
    </>
  );
};

export default TransactionsDisplay;
