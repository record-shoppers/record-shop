import { ACTION } from "../actions/types";
import { setItemInStorage, clearItemInStorage } from "../helpers/localStoreage";

const initialState = {
  records: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_INITIAL_STATE:
      return (state = { ...action.payload });
    case ACTION.ADD_ITEM:
      const exist = state.records.find((record) => {
        return record._id === action.payload._id;
      });

      if (!exist) {
        const newItem = {
          ...state,
          records: [...state.records, { ...action.payload, qty: 1 }],
        };
        setItemInStorage("order", newItem);
        return newItem;
      } else {
        const modifiedItems = {
          ...state,
          records: state.records.map((record) =>
            record._id === action.payload._id
              ? { ...record, qty: record.qty + 1 }
              : { ...record }
          ),
        };
        setItemInStorage("order", modifiedItems);
        return modifiedItems;
      }
    case ACTION.REMOVE_ITEM:
      const modifiedItems = {
        ...state,
        records: state.records.map((record) =>
          record._id === action.payload._id
            ? {
                ...record,
                qty: record.qty - 1,
              }
            : { ...record }
        ),
      };
      const filteredItems = {
        ...modifiedItems,
        records: modifiedItems.records.filter((record) => record.qty > 0),
      };
      setItemInStorage("order", filteredItems);
      return filteredItems;
    case ACTION.REMOVE_ALL:
      clearItemInStorage("order");
      return {
        ...state,
        records: [],
      };
    default:
      return state;
  }
};
