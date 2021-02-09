import styled from "styled-components";
import { Text, BaseIcon } from "../../common/styles";
import { useEffect, useState } from "react";
import { getPatchedLog } from "./helper";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const DetailSquare = styled.div`
  position: relative;
  padding: 0 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 9px 28px 0 rgba(0, 0, 0, 0.03);
  background-color: #ffffff;
  display: flex;
  height: 100px;
  min-width: 264px;
`;

const Amount = styled.div`
  font-family: PingFangSC;
  font-size: 24px;
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.85);
  margin-left: 26px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Summary = ({ summaryLog }) => {
  const [summaryLogDisplay, setSummeryLogDisplay] = useState([]);

  useEffect(() => {
    if (summaryLog) {
      const patchedLog = getPatchedLog(summaryLog);
      setSummeryLogDisplay(patchedLog);
    }
  }, [summaryLog]);

  return (
    <Container>
      {summaryLogDisplay.map((log) => {
        return (
          <DetailSquare key={log.key}>
            <BaseIcon src={log.icon} />
            <Content>
              <div>
                <Text color={log.color}>{log.displayName}</Text>
                <Amount>
                  {`${log.amount.toLocaleString()}${
                    log.displayName === "Approval Rate" ? "%" : ""
                  }`}
                </Amount>
              </div>
            </Content>
          </DetailSquare>
        );
      })}
    </Container>
  );
};

export default Summary;
