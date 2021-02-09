import {
  LOAD_DATA,
  FILTER_DATA,
  SET_PAGINATION_COUNT,
  SET_START_POSITION,
  NEXT_PAGINATION,
  PREVIOUS_PAGINATION,
} from "./constants";
import { fetchData } from "../../api/transactions";
import { setAlert } from "./alert";

export const loadTransactions = () => async (dispatch) => {
  try {
    const fetchedData = await fetchData();
    dispatch({
      type: LOAD_DATA,
      payload: fetchedData,
    });
    dispatch(setAlert("transactions log loaded successfully", "success"));
  } catch (error) {
    if (!error.response) {
      dispatch(setAlert(error.message, "danger"));
    } else {
      const { errors } = error.response.data;
      if (errors) {
        errors.forEach((e) => {
          dispatch(setAlert(e.msg, "danger"));
        });
      }
    }
  }
};

export const filterData = (filterFields) => (dispatch) => {
  dispatch({
    type: FILTER_DATA,
    payload: filterFields,
  });
};

export const setPaginationCount = (paginationCount) => (dispatch) => {
  dispatch({
    type: SET_PAGINATION_COUNT,
    payload: paginationCount,
  });
};

export const setStartPosition = (index) => (dispatch) => {
  dispatch({
    type: SET_START_POSITION,
    payload: index,
  });
};

export const nextPagination = (index) => (dispatch) => {
  dispatch({
    type: NEXT_PAGINATION,
    payload: index,
  });
};

export const previousPagination = (index) => (dispatch) => {
  dispatch({
    type: PREVIOUS_PAGINATION,
    payload: index,
  });
};
