
import React, { useEffect } from 'react';
import Main from './Component/MainLayout/OutLet/Main';
import { ProductProvider } from './Component/GlobalContextAPI/GlobalContext';


import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <ProductProvider>
        <Main />
    </ProductProvider>
  );
};

export default App;