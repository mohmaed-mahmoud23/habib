import React, { useContext } from 'react';
import { ProdactContext } from "./Prodactcontextapi";

const ProdactDetals = () => {
    const { select, AddtoCard } = useContext(ProdactContext);

    // التحقق من وجود المنتج المحدد
    if (!select) {
        return <div>Loading...</div>; // عرض رسالة تحميل حتى يتم تحديد منتج
        }

    return (
        <div>
            <h1>Title: {select.title}</h1>
            <h2>Price: {select.price}</h2>
            <h3>Description: {select.description}</h3>
            <img src={select.image} alt={select.title} />
            <button onClick={() => AddtoCard(select)}>Add to Cart</button>
        </div>
    );
};

export default ProdactDetals;
