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
            gender: 'male',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
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
            gender: 'male',
            title: 'Summer Exclusive Knit Sandals',
            description: 'These high-top sneakers bring comfort and edge to your everyday look. Crafted with a tough canvas upper, they’re built to go the distance',
            rate: 50,
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
            gender: 'male',
            title: 'Autumn Floral Print Shoes',
            description: 'Slide into all-day comfort with these minimalist trainers. Their cushioned insole and grip-ready sole make them ideal for urban adventures.',
            rate: 12,
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
            gender: 'female',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/image-product-2.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/image-product-3.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/image-product-4.jpg`
        },
        {
            id:5,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            gender: 'female',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/fshoesone.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/fshoesone.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/fshoesone.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/fshoesone.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/fshoesone.jpg`
        },
        {
            id:6,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            gender: 'female',
            title: 'Fall Limited Edition Vans',
            description: 'These low-profile sneaker are you perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer',
            rate: 30,
            img: `${process.env.PUBLIC_URL}/images/fshoetwo.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/fshoetwo.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/fshoetwo.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/fshoetwo.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/fshoetwo.jpg`
        },
        {
            id:7,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            gender: 'female',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/fshoethree.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/fshoethree.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/fshoethree.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/fshoethree.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/fshoethree.jpg`
        },
        {
            id:8,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            gender: 'male',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/mshoeone.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/mshoeone.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/mshoeone.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/mshoeone.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/mshoeone.jpg`
        },
        {
            id:9,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            gender: 'male',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/mshoetwo.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/mshoetwo.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/mshoetwo.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/mshoetwo.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/mshoetwo.jpg`
        },
        {
            id:10,
            brand: 'Balenciaga',
            pname: 'white shoes',
            nprice: 3000,
            oprice: 4000,
            gender: 'female',
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/fshoefour.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/fshoefour.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/fshoefour.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/fshoefour.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/fshoefour.jpg`
        },
    ]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}