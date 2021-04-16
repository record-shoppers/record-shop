import styled from "styled-components";

export const BasketContainer = styled.div`
    margin-top: 40px;
    padding: 20px;
  `;

export const OrderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 500px;
  `;

export const BasketItems = styled.section`
    /* height: 400px; */
    width: ${(props) => props.width};
    overflow: scroll;
  `;

export const BasketTotal = styled.section`
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

export const BasketItemCard = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: 20px;
    background-color: black;
    height: 150px;
  `;

export const ItemImage = styled.img`
    height: 100%;
    width: 40%;
  `;

export const BasketItemsDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    color: white;
  `;

export const Controllers = styled.div`
    display: flex;
    margin-top: 10px;
  `;

export const Control = styled.div`
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

export const ImageHeineken = styled.img`
    height: 150px;
    width: 100px;
  `;

export const OrderTotal = styled.div`
    margin-top: 20px;
  `;

export const OrderButton = styled.button`
    display: block;
    margin: 20px 0;
    background-color: #eea668;
    color: #ffff;
  `;

export const PreviousOrders = styled.div``;
export const PreOrderInfo = styled.div`
    display: flex;
    justify-content: space-between;
  `;

export const PreviousOrderTitle = styled.h3`
    margin: 50px 0;
  `;