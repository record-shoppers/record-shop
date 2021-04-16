import React from "react";
import {
    BasketItemCard,
    ItemImage,
    BasketItemsDesc,
    PreOrderInfo
} from "../css/BasketStyles"

export const SubBasket = ({ data }) => {
    console.log('data = ', data);

    const displayOrderList = data && data.map((orders) => {
        console.log('orders.records', orders.records);
        return (
            <>
                <PreOrderInfo>
                    <div>{orders.createdAt.slice(0, 10)}</div>
                    <div>59.2$</div>
                </PreOrderInfo>

                { orders.records.map((record) => {
                    console.log('record', record.recordID);

                    return (
                        <BasketItemCard>
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
            </>
        )
    });
    return (
        <>
            {displayOrderList}
        </>
    )
};
