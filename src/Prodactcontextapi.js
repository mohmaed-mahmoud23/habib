import React, { createContext, useState, useEffect } from "react";

export const ProdactContext = createContext();

export const ProdactProvider = ({ children }) => {
    const [Prodact, SetProdact] = useState([]);
    const [select, Setselect] = useState(null);
    const [cart, Setcart] = useState([]);

    useEffect(() => {
        const fetchProdacts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                SetProdact(data);
            } catch (error) {
                console.error('error fetch', error);
            }
        };

        fetchProdacts();
    }, []);


  const AddtoCard=(Prodact)=>{
    Setcart([...cart,Prodact])

  }




    return (
        <ProdactContext.Provider value={{ Prodact, select, Setselect ,cart,AddtoCard}}>
            {children}
        </ProdactContext.Provider>
    );
};
