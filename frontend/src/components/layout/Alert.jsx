import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const AlertText = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: ${({ alertType }) =>
    alertType === "danger" ? "#dc3545" : " #28a745"};
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  box-sizing: border-box;
  text-align: center;
`;

const Alert = () => {
  const alerts = useSelector((state) => state.alerts);

  return (
    alerts !== null &&
    alerts.length > 0 && (
      <>
        <div style={{ width: "100%" }}>
          {" "}
          {alerts.map((alert, index) => {
            return (
              <AlertText key={index} alertType={alert.alertType}>
                {alert.msg}
              </AlertText>
            );
          })}
        </div>
      </>
    )
  );
};

export default Alert;
