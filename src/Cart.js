import React, { useContext } from 'react';
import { ProdactContext } from "./Prodactcontextapi";

const Cart = () => {
    const { cart } = useContext(ProdactContext);

    return (
        <div>
            {cart.length === 0 ? (
                <p>سلة التسوق فارغة</p>
            ) : (
                <div>
                    {cart.map((prodact) => (
                        <div key={prodact.id}>
                            <img src={prodact.image} style={{width :"200px"}} alt={prodact.title} />
                            <h1>Title: {prodact.title}</h1>
                            <h2>Price: {prodact.price}</h2>
                            <h3>Description: {prodact.description}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
