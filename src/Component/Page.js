import '../App.css';
import '../index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Page(){
    
    const [product, setProduct] = useState([
        {   
            id:1,
            brand: 'Gucci',
            pname: 'Vans',
            nprice: 3000,
            oprice: 4000,
            title: 'Fall Limited Edition Vans',
            description: 'These low-profile sneaker are you perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer',
            rate: 30,
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
            title: 'Signature Leather Sneakers',
            description: 'Built for style and function, these sleek low-tops feature breathable mesh and a sturdy outsole to handle any terrain.',
            rate: 25,
            img: `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
            img2: `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
            img3: `${process.env.PUBLIC_URL}/images/image-product-2.jpg`,
            img4: `${process.env.PUBLIC_URL}/images/image-product-3.jpg`,
            img5: `${process.env.PUBLIC_URL}/images/image-product-4.jpg`
        },
    ]);

    const navigate = useNavigate()
    const handleClick = (val, name) => {
        navigate('/product/'+name, { state: { product: product[val-1]}})
    }
    return(
        <>
        <section id="Projects"
            className="bg-green-100 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-5">
                {product?(
                    product.map((e)=>{
                        return(
                            <div key={e.id} className="w-72 bg-white shadow-2xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                                onClick={()=>{handleClick(e.id, e.pname)}}
                            >
                                <Link
                                to={`/product/${e.id}`}
                                >
                                    <img src={e.img}
                                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                                    <div className="px-4 py-3 w-72">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">{e.brand}</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{e.pname}</p>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">${e.nprice}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">${e.oprice}</p>
                                            </del>
                                        </div>
                                    </div>
                                </Link>
                                </div>
                        )
                    })
                ):(null)}
            
        </section>
        </>
    )
}