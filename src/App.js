import Header from './Component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Component/Page';
import Home from './Component/Home';
import Product from './Component/Product';
import { ProductProvider } from './Context/ProductContext';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
      <>
        <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <Header>
              <Routes>
                <Route path="/page" element={<Page/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="*" element={<Home/>} />
              </Routes>
            </Header>
            </ProductProvider>
            </CartProvider>
        </BrowserRouter>
      </>
  );
}
export default App;
