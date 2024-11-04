import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProdactContext } from "./Prodactcontextapi";

const ProdactList = () => {
    const { Prodact, Setselect , AddtoCard } = useContext(ProdactContext);





    const handel = (prodact) => {
        Setselect(prodact);
    }



const handelAddcart = (Prodact) =>{
AddtoCard(Prodact)
    
}





    return (
        <>
            <h1>Products List</h1>
            <div>
                {
                    
                        Prodact.map((prodact) => (
                            <div key={prodact.id}> <br/> 
                                <Link to={`/Prodact/${prodact.id}`} onClick={() => handel(prodact)}>
                                   {prodact.title}
                                    More Details


                                </Link>
                             
                                <button onClick={()=>handelAddcart(prodact)}>addtocard</button>
                            </div>
                        ))
                  
                }
            </div>
        </>
    );
}

export default ProdactList;
