import Header from './Component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Component/Page';
import Home from './Component/Home';
import Product from './Component/Product';
import { ProductProvider } from './Context/ProductContext';
import { CartProvider } from './Context/CartContext';
import Menshoes from './Component/men';
import Collections from './Component/general';

function App() {
  return (
      <>
        <BrowserRouter>
        <CartProvider>
          <ProductProvider>
            <Header>
              <Routes>
                <Route path="/" element={<Collections/>} />
                <Route path="/page" element={<Page/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/men" element={<Menshoes/>} />
                <Route path="*" element={<Collections/>} />
                // <Route path="*" element={<Home/>} />
              </Routes>
            </Header>
            </ProductProvider>
            </CartProvider>
        </BrowserRouter>
      </>
  );
}
export default App;
