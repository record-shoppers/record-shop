import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrementItem, incrementItem } from '../actions/basketActions';

export const Basket = () => {
    const records = useSelector( state => state.basketReducer.records )
    const dispatch = useDispatch();
    const basketItems = records.map( ( record ) => {
        return (
        <>
            <img src={record.cover} alt="Record Cover"/>
            <h3>{record.title}</h3>
            <h3>{record.artist}</h3>
            <h3>{record.price}</h3>
            <div onClick={dispatch(decrementItem())}>-</div>
            <div>{record.qty}</div>
            <div onClick={dispatch(incrementItem())}>+</div>
        </>
        )
    })
    return (
        <>
            <div>
                {basketItems}
            </div>
            <div>TotalPrice</div>
        </>
    )
}
