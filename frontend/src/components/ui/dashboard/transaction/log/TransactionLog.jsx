import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDeviceIcon, getPaymentType, getDotColor } from "./helper";
import { Text } from "../../../common/styles";
import { useSelector } from "react-redux";
import Pagination from "../../../pagination/pagination";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Container = styled.div`
  background-color: white;
  padding: 32px 0 88px 0;
`;

const Tr = styled.tr`
  height: 54px;
  padding: 16px 0 0;
  background-color: #ffffff;
  border: 1px solid #e9e9e9;

  > td span {
    margin-left: 30px;
    font-family: PingFangSC;
    font-size: 14px;
    line-height: 1.57;
    color: rgba(0, 0, 0, 0.65);
    display: block;
  }
`;

const TableHeaders = styled.tr`
  height: 54px;
  padding: 16px 60px 16px 32px;
  background-color: #fafafa;
`;

const TableHeader = styled.th`
  font-family: PingFangSC;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: rgba(0, 0, 0, 0.65);
  text-align: left;

  > span {
    margin: 0 32px 0 32px;
  }
`;
const Table = styled.table`
  margin-left: 32px;
  width: calc(100% - 64px);
  border-collapse: collapse;
`;

const Img = styled.img`
  width: 32px;
  height: 21px;
`;

const tableTitles = [
  "Date/Time",
  "Name",
  "Device",
  "Payment",
  "BIN Number",
  "Amount",
  "Trans ID",
  "Decision",
];

const renderTableHeaders = () => {
  const header = Object.keys(tableTitles);
  return header.map((key, index) => {
    return (
      <TableHeader key={index}>
        <span>{tableTitles[key]}</span>
      </TableHeader>
    );
  });
};

const renderTableData = (data) => {
  return data.map((transaction, index) => {
    const {
      date,
      firstName,
      lastName,
      device,
      payment,
      binNumber,
      amount,
      transactionId,
      decision,
    } = transaction;
    const name = `${firstName} ${lastName}`;
    return (
      <Tr key={index}>
        <td>
          <span>{new Date(date).toLocaleString()}</span>
        </td>
        <td>
          <span>{name}</span>
        </td>
        <td>
          <span>{<img src={getDeviceIcon(device)} alt="" />}</span>
        </td>
        <td>
          <span>{<Img src={getPaymentType(payment)} alt="" />}</span>
        </td>
        <td>
          <span>{binNumber}</span>
        </td>
        <td>
          <span>{`${amount}$`}</span>
        </td>
        <td>
          <CopyToClipboard text={transactionId}>
            <div className="tooltip">
              <span
                onClick={() =>
                  window.alert(`${transactionId} was coppied to clipboard`)
                }
              >
                {transactionId.slice(0, 10)}...
              </span>
              <span className="tooltiptext">{transactionId}</span>
            </div>
          </CopyToClipboard>
        </td>
        <td>
          <span>
            <div>
              <Text table color={getDotColor(decision)}>
                {decision}
              </Text>
            </div>
          </span>
        </td>
      </Tr>
    );
  });
};
const TransactionLog = () => {
  const [paginatedData, setPaginatedData] = useState([]);
  const { trs } = useSelector((state) => state);

  const { displayCount, currentDisplayedData, startPosition } = trs;

  useEffect(() => {
    if (startPosition === 1) {
      const newPaginatedData = currentDisplayedData.slice(0, displayCount);
      setPaginatedData(newPaginatedData);
    }

    if (startPosition > 1) {
      const newPaginatedData = currentDisplayedData.slice(
        startPosition * displayCount - displayCount,
        startPosition * displayCount
      );
      setPaginatedData(newPaginatedData);
    }
  }, [currentDisplayedData, displayCount, startPosition]);

  return (
    <Container>
      <Table>
        <tbody>
          <TableHeaders>{renderTableHeaders()}</TableHeaders>
          {currentDisplayedData.length > 0 && renderTableData(paginatedData)}
        </tbody>
      </Table>
      {currentDisplayedData.length > 0 && (
        <Pagination
          displayCount={displayCount}
          currentDisplayedData={currentDisplayedData}
          startPosition={startPosition}
        />
      )}
    </Container>
  );
};

export default TransactionLog;
