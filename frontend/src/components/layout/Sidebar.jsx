import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./assets/logo-nsure-white.svg";
import LogoMark from "./assets/logo-mark.svg";
import billingIcon from "./assets/billing.svg";
import transactionIcon from "./assets/transaction.svg";
import minimize from "./assets/minimize.svg";
import maximize from "./assets/maximize.svg";
import { withRouter, useHistory } from "react-router-dom";

const SideBar = styled.div`
  background-color: rgba(1, 101, 255, 0.85);
  position: relative;
  width: ${({ collapsed }) => (collapsed ? "64px" : "240px")};
  display: flex;
  flex-direction: column;
`;

export const Button = styled.img`
  position: absolute;
  left: 100%;
  transform: translateX(-50%);
  top: 20px;
  width: 24px;
  height: 24px;
  z-index: 2;
`;

const Header = styled.div`
  height: 64px;
  background-color: #0165ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ collapsed }) => (collapsed ? "center" : "auto")};
  height: 40px;
  background-color: ${({ selected }) => (selected ? "#4f94fd" : "auto")};
`;

const ItemText = styled.span`
  display: inline-block;
  height: 20px;
  font-family: PingFangSC;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #ffffff;
  margin-left: 7px;
`;

const NSureLogo = styled.img`
  width: 117px;
  height: 24px;
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: ${({ collapsed }) => (collapsed ? "0" : "43px")};
`;

const Menu = styled.div`
  margin-top: 103px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const history = useHistory();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SideBar collapsed={collapsed}>
      <Header>
        <NSureLogo src={collapsed ? LogoMark : Logo} />
      </Header>
      <Button src={collapsed ? maximize : minimize} onClick={toggleCollapsed} />
      <Menu>
        <MenuItem
          collapsed={collapsed}
          selected={selectedItem === 0}
          onClick={() => {
            setSelectedItem(0);
            history.push("/dashboard");
          }}
        >
          <MenuIcon collapsed={collapsed} src={transactionIcon} />
          {!collapsed && <ItemText>Transactions</ItemText>}
        </MenuItem>

        <MenuItem
          collapsed={collapsed}
          selected={selectedItem === 1}
          onClick={() => {
            setSelectedItem(1);
            history.push("/billing");
          }}
        >
          <MenuIcon collapsed={collapsed} src={billingIcon} />
          {!collapsed && <ItemText>Billing </ItemText>}
        </MenuItem>
      </Menu>
    </SideBar>
  );
};

export default withRouter(Sidebar);
