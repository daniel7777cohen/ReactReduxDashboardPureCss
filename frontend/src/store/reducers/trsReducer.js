import {
  LOAD_DATA,
  FILTER_DATA,
  SET_PAGINATION_COUNT,
  SET_START_POSITION,
  NEXT_PAGINATION,
  PREVIOUS_PAGINATION,
} from "../actions/constants";
import { filterByFields } from "./helper";

const initialState = {
  data: [],
  isLoading: true,
  currentDisplayedData: [],
  displayCount: 10,
  startPosition: 1,
  summaryLog: [],
};

const trsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_DATA:
      const { transactions, summaryLog } = payload;
      return {
        ...state,
        data: transactions,
        currentDisplayedData: transactions,
        isLoading: false,
        summaryLog,
      };
    case FILTER_DATA: {
      const previousData = [...state.data];
      const newFilteredData = filterByFields(previousData, payload);
      return {
        ...state,
        currentDisplayedData: newFilteredData,
        isLoading: false,
      };
    }
    // Pagination Dropdown
    case SET_PAGINATION_COUNT:
      return {
        ...state,
        displayCount: payload,
        startPosition: 1,
      };
    case SET_START_POSITION:
      return {
        ...state,
        startPosition: payload,
      };
    // Next Arrow Pagination List
    case NEXT_PAGINATION:
      let nextposition = state.startPosition;
      if (state.startPosition >= 1) {
        nextposition = state.startPosition + 1;
      }
      return {
        ...state,
        startPosition: nextposition,
      };
    // Previous Pagination List
    case PREVIOUS_PAGINATION:
      let previousposition = state.startPosition;
      if (state.startPosition !== 1) {
        previousposition = state.startPosition - 1;
      }
      return {
        ...state,
        startPosition: previousposition,
      };
    default:
      return state;
  }
};

export default trsReducer;
