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
    height: 500px;
  `;

    const BasketItems = styled.section`
     /* height: 400px; */
    width: ${(props) => props.width};
    overflow: scroll;
  `;

    const BasketTotal = styled.section`
    /* height: 400px; */
    width: 49%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 250px;
    text-align: center;
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
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
    height: 150px;
    width: 100px;
  `;

  const OrderTotal = styled.div`
    margin-top: 20px;
  `;

    const OrderButton = styled.button`
    display: block;
    margin: 20px 0;
    background-color: #EEA668;
    color: #FFFF;
  `;

    const PreviousOrders = styled.div`
  `;
    const PreOrderInfo = styled.div `
    display: flex;
    justify-content: space-between;
    `;

    const PreviousOrderTitle = styled.h3`
    margin: 50px 0;
    `;
    //const records = useSelector( state => state.basketReducer.records )
    const dispatch = useDispatch();
    const basketItems = records.map((record) => {
        return (
            <BasketItemCard>
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
                <BasketItems width="49%">{basketItems}</BasketItems>
                <BasketTotal>
                    <ImageHeineken src={HeinekenImage} alt="Heineken Beer On Fire" />
                   <OrderTotal>
                        <h5>Order Total</h5>
                        <h2>Price $</h2>
                   </OrderTotal>
                    <OrderButton>Buy Now</OrderButton>
                    <small>
                        Buy your order now and get a small alcohol free Heineken on fire!
                    </small>
                </BasketTotal>
            </OrderContainer>
            <PreviousOrderTitle>Previous Orders</PreviousOrderTitle>
            <PreviousOrders>
               <PreOrderInfo>
                    <div>14/04/2021</div>
                    <div>59.2$</div>
               </PreOrderInfo>
                <BasketItems width="100%">{basketItems}</BasketItems>
            </PreviousOrders>
        </BasketContainer>
    );
};
