import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
        {
            id:1,
            brand: 'Gucci',
            pname: 'Vans',
            nprice: 3000,
            oprice: 4000,
            img: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img3: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img4: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img5: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id:2,
            brand: 'Versace',
            pname: 'sandals',
            nprice: 30000,
            oprice: 40000,
            img: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img3: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',             
            img4: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img5: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id:3,
            brand: 'Louis Vuitton',
            pname: 'black shoes',
            nprice: 3000,
            oprice: 4000,
            img: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img2: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img3: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img4: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            img5: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
       
        },
        {
            id:4,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            img: `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/image-product-2.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/image-product-3.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/image-product-4.jpg`
        },
    ]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}