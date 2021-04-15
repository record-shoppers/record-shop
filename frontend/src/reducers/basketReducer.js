import { ACTION } from "../actions/types";
import { setItemInStorage } from "../helpers/localStoreage";

const initialState = {
  records: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_ITEM:
      const exist = state.records.find((record) => {
        console.log("record =>", record);
        return record.recordID === action.payload.recordID;
      });

      console.log("exist is false", action.payload.recordID);
      if (!exist) {
        const newItem = {
          ...state,
          records: [...state.records, action.payload],
        };
        setItemInStorage("order", newItem);
        return newItem;
      } else {
        const modifiedItem = {
          ...state,
          records: state.records.map((record) =>
            record.recordID === action.payload.recordID
              ? { ...record, qty: record.qty + 1 }
              : { ...record }
          ),
        };
        setItemInStorage("order", modifiedItem);
        return modifiedItem;
      }
    case ACTION.DECREMENT_ITEM:
      return {
        ...state,
        records: state.records.map((record) =>
          record.id === action.payload.id
            ? {
                ...record,
                qty: record.qty > 1 ? record.qty - 1 : (record.qty = 1),
              }
            : { ...record }
        ),
      };
    case ACTION.INCREMENT_ITEM:
      return {
        ...state,
        records: state.records.map(
          (record) => record.id === action.payload.id && record.qty++
        ),
      };
    case ACTION.REMOVE_ITEM:
      return {
        ...state,
        records: state.records.filter((record) => record.id !== action.payload),
      };
    case ACTION.REMOVE_ALL:
      return {
        ...state,
        records: [],
      };
    default:
      return state;
  }
};
