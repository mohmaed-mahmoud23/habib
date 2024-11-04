    import React from 'react';
    import { Link } from 'react-router-dom';
    import RegeterPg from './RegeterPg';
    import LoginPg from './LoginPg';
    import ChekOut from './ChekOut';
    



    const Navbar = () => {
        return (
            <div>
                <Link to="/ProdactList">Home</Link>
                <Link to="/Cart">Cart</Link>
                <Link to="/RegeterPg">RegeterPg</Link>
           <Link to="/login">Login</Link>
           <Link to="/ChekOut">ChekOut</Link>

            </div>
        );
    };

    export default Navbar;
