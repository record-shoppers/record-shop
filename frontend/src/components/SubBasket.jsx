import React from "react";
import {
  BasketItemCard,
  ItemImage,
  BasketItemsDesc,
  PreOrderInfo,
} from "../css/BasketStyles";

export const SubBasket = ({ data }) => {
  console.log("sub basket data = ", data);

  const displayOrderList =
    data &&
    data.map((orders) => {
      return (
        <div key={orders.id}>
          <PreOrderInfo>
            <div>{orders.createdAt.slice(0, 10)}</div>
            <div>{orders.TotalPrice}$</div>
          </PreOrderInfo>

          {orders.records.map((record) => {
            return (
              <BasketItemCard key={record.recordID._id}>
                <ItemImage src={record.recordID.cover} alt="Record Cover" />
                <BasketItemsDesc>
                  <div>
                    <h5>{record.recordID.title}</h5>
                    <h3>{record.recordID.artist}</h3>
                  </div>
                  <h5>{record.recordID.price} $</h5>
                </BasketItemsDesc>
              </BasketItemCard>
            );
          })}
        </div>
      );
    });
  return <>{displayOrderList}</>;
};
