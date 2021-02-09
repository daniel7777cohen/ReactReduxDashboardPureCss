import React, { useState } from "react";
import styled from "styled-components";
import { filterData, setStartPosition } from "../../../../../store/actions/trs";
import { useDispatch } from "react-redux";

const Container = styled.div`
  padding: 24px 32px 31px 32px;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  background-color: white;
  margin-top: 20px;
`;

export const FormDesc = styled.span`
  margin: 8px 2px;
  width: 51px;
  height: 22px;
  font-family: PingFangSC;
  font-size: 14px;
  line-height: 1.57;
  color: rgba(0, 0, 0, 0.85);
  white-space: nowrap;
`;

export const Input = styled.input`
  height: 32px;
  padding: 5px 12px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  &::-webkit-input-placeholder {
    font-family: HelveticaNeue;
    font-size: 14px;
    line-height: 1.57;
    color: rgba(0, 0, 0, 0.25);
  }
`;

const BottomSearchRow = styled.form`
  display: flex;
`;

const Select = styled.select`
  width: 190px;
  height: 32px;
  padding: 5px 12px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  font-family: HelveticaNeue;
  font-size: 14px;
  line-height: 1.57;
  color: rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.isFirst ? "0" : "15px")};
`;

export const SearchButton = styled.button`
  width: 77px;
  height: 32px;
  margin-top: 37px;
  margin-left: 15px;
  padding: 5px 14.5px 5px 16px;
  border-radius: 4px;
  background-color: #1890ff;
  font-family: PingFangSC;
  font-size: 14px;
  line-height: 1.57;
  color: #ffffff;
  border: none;
`;

export const ClearButton = styled.button`
  width: 65px;
  height: 32px;
  margin-top: 37px;
  margin-left: 6px;
  padding: 5px 14px 5px 16px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  font-family: PingFangSC;
  font-size: 14px;
  line-height: 1.57;
  color: rgba(0, 0, 0, 0.65);
`;

const Search = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    transactionId: "",
    decision: "all",
    payment: "all",
    min: 0,
    max: 0,
    binNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    dispatch(setStartPosition(1));
    e.preventDefault();
    let filterFields = { ...formData };

    dispatch(filterData(filterFields));
  };

  const reset = () => {
    setFormData({
      transactionId: "",
      decision: "all",
      payment: "all",
      min: 0,
      max: 0,
      binNumber: "",
      email: "",
    });
  };

  const handleClear = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <Container>
      <Input
        type="text"
        name="transactionId"
        width="272px"
        onChange={handleChange}
        placeholder="Search Trans ID"
        value={formData["transactionId"]}
        style={{ marginBottom: "8px" }}
      />
      <BottomSearchRow>
        <Wrapper isFirst>
          <FormDesc>Decision</FormDesc>
          <Select
            value={formData["decision"]}
            onChange={handleChange}
            name="decision"
          >
            <option value="all">All</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
            <option value="Reviewd">Reviewd</option>
            <option value="Processing">Processing</option>
          </Select>
        </Wrapper>
        <Wrapper>
          <FormDesc>Payment</FormDesc>
          <Select
            value={formData["payment"]}
            onChange={handleChange}
            name="payment"
          >
            <option value="all">All</option>
            <option value="visa">Visa</option>
            <option value="amex">Amex</option>
            <option value="diners">Diners</option>
            <option value="mastercard">Mastercard</option>
          </Select>
        </Wrapper>
        <Wrapper>
          <FormDesc>Amount</FormDesc>
          <div style={{ display: "flex" }}>
            <Input
              type="text"
              name="min"
              width="88px"
              onChange={handleChange}
              placeholder="Min"
              value={formData["min"]}
            />
            <Input
              type="text"
              name="max"
              width="88px"
              onChange={handleChange}
              placeholder="Max"
              value={formData["max"]}
            />
          </div>
        </Wrapper>
        <Wrapper>
          <FormDesc>BIN Number</FormDesc>
          <Input
            type="text"
            name="binNumber"
            width="88px"
            onChange={handleChange}
            placeholder="Bin Num"
            value={formData["binNumber"]}
          />
        </Wrapper>
        <Wrapper>
          <FormDesc>Email</FormDesc>
          <Input
            type="email"
            name="email"
            width="200px"
            onChange={handleChange}
            placeholder="Email"
            value={formData["email"]}
          />
        </Wrapper>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        <ClearButton onClick={handleClear}>Clear</ClearButton>
      </BottomSearchRow>
    </Container>
  );
};

export default Search;
