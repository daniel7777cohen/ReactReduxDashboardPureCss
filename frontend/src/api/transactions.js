import axios from "./index";

export const fetchData = async () => {
  const response = await axios.get("http://localhost:5000/api/transactions");
  return response.data;
};
