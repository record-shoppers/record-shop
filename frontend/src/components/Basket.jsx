import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementItem, incrementItem } from "../actions/basketActions";
import { records } from "./data";
import styled from "styled-components";
import HeinekenImage from "../assets/Heineken.png";

export const Basket = () => {
  const BasketContainer = styled.div`
    margin-top: 40px;
    padding: 20px;
  `;

  const OrderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;

  const BasketItems = styled.section`
    height: 400px;
    width: 49%;
    overflow: scroll;
  `;

  const BasketTotal = styled.section`
    height: 400px;
    width: 49%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 100px;
  `;

  const BasketItemCard = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: 20px;
    background-color: black;
    height: 150px;
  `;

  const ItemImage = styled.img`
    height: 100%;
    width: 40%;
  `;

  const BasketItemsDesc = styled.div`
    color: white;
  `;

  const Controllers = styled.div`
    display: flex;
    margin-top: 10px;
  `;

  const Control = styled.div`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
    border-radius: 50%;
    height: 16px;
    width: 16px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ImageHeineken = styled.img`
    height: 100px;
    width: 60px;
  `;

  const OrderButton = styled.button`
    display: block;
  `;
  //const records = useSelector( state => state.basketReducer.records )
  const dispatch = useDispatch();
  const basketItems = records.map((record) => {
    return (
      <BasketItemCard>
        <ItemImage src={record.cover} alt="Record Cover" />
        <BasketItemsDesc>
          <h5>{record.title}</h5>
          <h3>{record.artist}</h3>
          <h5>{record.price} $</h5>
          <Controllers>
            <Control
              backgroundColor="white"
              color="black"
              onClick={dispatch(decrementItem())}
            >
              -
            </Control>
            <Control backgroundColor="black" color="white">
              {record.qty}
            </Control>
            <Control
              backgroundColor="white"
              color="black"
              onClick={dispatch(incrementItem())}
            >
              +
            </Control>
          </Controllers>
        </BasketItemsDesc>
      </BasketItemCard>
    );
  });

  return (
    <BasketContainer>
      <h2>Cart!</h2>
      <p>Gives us all your money!</p>
      <h4>currently in your cart</h4>
      <OrderContainer>
        <BasketItems>{basketItems}</BasketItems>
        <BasketTotal>
          <ImageHeineken src={HeinekenImage} alt="Heineken Beer On Fire" />
          <h5>Order Total</h5>
          <h2>Price $</h2>
          <OrderButton>Buy Now</OrderButton>
          <q>
            Buy your order now and get a small alcohol free Heineken on fire
          </q>
        </BasketTotal>
      </OrderContainer>
    </BasketContainer>
  );
};
