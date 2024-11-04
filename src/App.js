  import React from 'react';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { ProdactProvider } from './Prodactcontextapi';
  import ProdactList from './ProdactList';
  import ProdactDetals from './ProdactDetals';
  import Home from './Home';
  import Navbar from './Navbar';
  import Cart from './Cart';
import RegeterPg from './RegeterPg';
import LoginPg from './LoginPg';
import ChekOut from './ChekOut';
  const App = () => {
    return (  
      <BrowserRouter>
        <Navbar />
        <ProdactProvider>
          <Routes>
            <Route path='/' element={<ProdactList />} />
            <Route path='/ProdactList' element={<ProdactList />} /> {/* تأكد من وجود هذا المسار */}
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/login' element={<LoginPg />} />
            <Route path='/ChekOut' element={<ChekOut />} />

            <Route path='/RegeterPg' element={<RegeterPg />} />
            

            <Route path='/Prodact/:id' element={<ProdactDetals />} />
          </Routes>
        </ProdactProvider>
      </BrowserRouter>
    );
  }

  export default App;
