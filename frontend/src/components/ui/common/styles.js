import styled from "styled-components";

export const BaseIcon = styled.img`
  height: fit-content;
  border-radius: 2px;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
  position:absolute;
  left:0;
  top:0;
  width: 52px;

`;

export const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 0 0 10px;
  padding: 4px 3px 3px 4px;
  background-color: #1890ff;
  border-radius: 50%;
`;


export const Text = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-family: PingFangSC;
  font-size: 14px;
  line-height: 1.57;
  color: rgba(0, 0, 0, 0.45);
  margin-left: ${({ table }) => (table ? "15px" : "30px")};

  &::before {
    position: absolute;
    right: calc(100% + 8px);
    display: block;
    background-color: ${({ color }) => color};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    content: "";
  }
`;
