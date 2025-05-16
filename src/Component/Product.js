import { useParams, useLocation } from "react-router-dom"
import { useState, useContext } from 'react'
import "../index.css";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import Cart from "./Cart";


export default function Product() {
    const [target, setTarget] = useState(false);
    const [myval, setMyval] = useState(1);
    const { product } = useContext(ProductContext); 
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(0);
    const { id } = useParams()
    const { addToCart } = useContext(CartContext);

    // console.log(useParams())

    const location = useLocation()
    const myproduct = location.state?.product
    console.log(myproduct)
    const handleDecrement = () =>{
      if(count>1) setCount(count - 1)
    }
    const handleIncrease = () =>{
      setCount(count + 1)
    }
    
    const handleSelect = (id, count) =>{
      const selectProduct = product.find(p => {
        if(p.id === id){
          return p.nprice = p.nprice * count
        }
      });
      if (selectProduct) addToCart(selectProduct,id);
    }
   
    const handleT = (val) =>{
      setTarget(true);
      setMyval(val)

    }
    return(
        <div className="container">
          {myproduct ? (
              <>
                <div className="box1">
                  <div className='img1'>
                    <div className='blurry'>
                      <img className="imgOne" src={target?myproduct[`img${myval}`] || myproduct.img: myproduct.img} alt={myproduct.pname} width="200" />
                    </div>
                    <img className="imgTwo" src={target?myproduct[`img${myval}`] || myproduct.img: myproduct.img} alt={myproduct.pname} width="200" />
                  </div>
                  <div className='img2' onClick={()=>handleT(2)}>
                    <img className='imageThree' src={myproduct.img2} alt={myproduct.pname} width="200" />
                  </div>
                  <div className='img3' onClick={()=>handleT(3)}>
                    <img className='imgFour' src={myproduct.img3} alt={myproduct.pname} width="200" />
                  </div>
                  <div className='img4' onClick={()=>handleT(4)}>
                    <img className="imgFive" src={myproduct.img4} alt={myproduct.pname} width="200" />
                  </div>
                  <div className='img5' onClick={()=>handleT(5)}>
                    <img className="imgSix" src={myproduct.img5} alt={myproduct.pname} width="200" />
                  </div>
                </div>
                <div className="box2">
                  <div className='company'>{myproduct.brand}</div>
                  <div className='title'>{myproduct.title}</div>
                  <div className='description'>{myproduct.description}</div>
                  <div className='price'>
                    <div className='price1'>
                      <span className="text-black text-xl font-semibold mr-2">${myproduct.nprice * count}.00</span>
                      <span
                        className="bg-gray-700 text-white text-xs font-semibold px-1 py-1 rounded">
                        {myproduct.rate}%
                      </span>
                    </div> 
                    {/* <br/> */}
                    <span className="font-semibold text-gray-400 text-sm line-through">$3000.00</span>
                  </div>
                  <div className='amount'>
                    <div className="cartCount bg-white rounded-[5px]">
                     <div className="cartCountInner shadow-2xl w-full">
                        <button
                            onClick={handleDecrement}
                            className="mr-1 bg-white rounded-tl-[10px] rounded-bl-[10px] text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        </button>
                        <div
                            className="font-semibold bg-white border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-6 py-2 select-none">
                            {count}
                        </div>
                        <button
                            onClick={handleIncrease}
                            className="ml-1 bg-white rounded-tr-[10px] rounded-br-[10px] text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                    </div>
                    <Cart 
                      id = {myproduct.id}
                      onSelect={handleSelect}
                      count={count}
                      // total={total}
                    />
                  </div>
                </div>
              </>
          ) : (
            <p>No product data found.</p>
          )}
      </div>
    )
}