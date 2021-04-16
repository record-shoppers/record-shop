import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeAll, removeItem } from "../actions/basketActions";
import HeinekenImage from "../assets/Heineken.png";
import { getPreOrders, placeOrder } from "../helpers/fetch";
import { SubBasket } from "./SubBasket";
import {
  BasketContainer,
  OrderContainer,
  BasketItems,
  BasketTotal,
  BasketItemCard,
  ItemImage,
  BasketItemsDesc,
  Controllers,
  Control,
  ImageHeineken,
  OrderTotal,
  OrderButton,
  PreviousOrders,
  PreviousOrderTitle,
} from "../css/BasketStyles";

export const Basket = () => {
  const records = useSelector((state) => state.basketReducer.records);
  const user = useSelector((state) => state.loginReducer.user);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [preOrders, setPreOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError("");
    console.log("basket user reference", user);
    try {
      const getData = async () => {
        let res = await getPreOrders(user._id);
        setPreOrders(res);
        setLoading(false);
      };
      getData();
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  }, []);

  const buyNow = async (records) => {
    try {
      const newRecordObj = records.map((record) => {
        return { recordID: record._id, quantity: record.qty };
      });
      const result = await placeOrder(newRecordObj, user._id);
      dispatch(removeAll());
      return result;
    } catch (error) {
      setError(
        "catch block error, There was a problem with your order please try again later!"
      );
      return;
    }
  };

  const totalPrice = records.reduce((acc, record) => {
    return (acc += record.price * record.qty);
  }, 0);
  console.log("this =>", records);
  const displayOrderList = (data) => {
    return data.map((record) => {
      return (
        <BasketItemCard key={record._id}>
          <ItemImage src={record.cover} alt="Record Cover" />
          <BasketItemsDesc>
            <div>
              <h5>{record.title}</h5>
              <h3>{record.artist}</h3>
            </div>
            <h5>{record.price} $</h5>
            <Controllers>
              <Control
                backgroundColor="white"
                color="black"
                onClick={() => dispatch(removeItem(record))}
              >
                -
              </Control>
              <Control backgroundColor="black" color="white">
                {record.qty}
              </Control>
              <Control
                backgroundColor="white"
                color="black"
                onClick={() => dispatch(addItem(record))}
              >
                +
              </Control>
            </Controllers>
          </BasketItemsDesc>
        </BasketItemCard>
      );
    });
  };
  return (
    <BasketContainer>
      <h2>Cart!</h2>
      <p>Gives us all your money!</p>
      <h4>currently in your cart</h4>
      {error && <h4>{error}</h4>}
      <OrderContainer>
        <BasketItems width="49%">{displayOrderList(records)}</BasketItems>
        <BasketTotal>
          <ImageHeineken src={HeinekenImage} alt="Heineken Beer On Fire" />
          <OrderTotal>
            <h5>Order Total</h5>
            <h2>{totalPrice} $</h2>
          </OrderTotal>
          <OrderButton onClick={() => buyNow(records)}>Buy Now</OrderButton>
          <small>
            Buy your order now and get a small alcohol free Heineken on fire!
          </small>
        </BasketTotal>
      </OrderContainer>
      <PreviousOrderTitle>Previous Orders</PreviousOrderTitle>
      <PreviousOrders>
        <SubBasket data={preOrders} />
      </PreviousOrders>
    </BasketContainer>
  );
};
