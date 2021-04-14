import { ACTION } from '../actions/types';

const initialState = {
    records: [],
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_ITEM:
        const exist = state.records.find((record) => record.id === action.payload.id);
        console.log('exist is false', action.payload);
        if (!exist) {
            return {
                ...state,
                records: [...state.records, { ...action.payload, qty: 1 }],
            };
        } else {
            return {
                ...state,
                records: state.records.map((record) =>
                    record.id === action.payload.id
                        ? { ...record, qty: record.qty + 1 }
                        : { ...record }
                ),
            };
        }
    case ACTION.DECREMENT_ITEM:
        return {
            ...state,
            records: state.records.map((record) => record.id === action.payload.id ? { ...record, qty: record.qty > 1 ? record.qty - 1 : record.qty = 1 } : { ...record }
            )
        }
    case ACTION.INCREMENT_ITEM:
        return {
            ...state,
            records: state.records.map((record) => record.id === action.payload.id && record.qty++)
        }
    case ACTION.REMOVE_ITEM:
        return {
            ...state,
            records: state.records.filter((record) => record.id !== action.payload)
        }
    case ACTION.REMOVE_ALL:
        return {
            ...state,
            records: []
        }
        default: 
        return state 
}
}