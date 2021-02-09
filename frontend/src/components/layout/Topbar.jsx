import React from "react";
import styled from "styled-components";
import UserSvg from "./assets/user.svg";
import NotificationSvg from "./assets/notification.svg";
import { UserIcon } from "../ui/common/styles";


const TopBar = styled.div`
  width: 100%;
  height: 64px;
  padding: 20px 24px 20px 17px;
  z-index: 1;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.div`
  padding: ${({ type }) => (type === "merchant" ? "3px 8px 0 8px" : "0 8px")};
`;
const Img = styled.img``;

const Topbar = () => {
  return (
    <TopBar className="display-user">
      <Item>
        <Img src={NotificationSvg} />
      </Item>
      <Item type={"merchant"}>Merchant name</Item>
      <Item>
        <UserIcon src={UserSvg} />
      </Item>
    </TopBar>
  );
};

export default Topbar;
