
import React from 'react';
import Main from './Component/MainLayout/OutLet/Main';
import { ProductProvider } from './Component/GlobalContextAPI/GlobalContext';


const App = () => {
  return (
    <ProductProvider>
        <Main />
    </ProductProvider>
  );
};

export default App;