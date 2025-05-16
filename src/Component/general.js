import '../index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import { useContext } from 'react';
import ColorThief from 'color-thief-browser';
import { useEffect, useState, useRef } from 'react';

export default function Collections(){
    const { product } = useContext(ProductContext);
    const navigate = useNavigate();
       const handleClick = (val, name) => {
        navigate('/product/'+name, { state: { product: product[val-1]}})
    }
    const [bgColor, setBgColor] = useState('bg-white');
    const imgRef = useRef()
    const imgSrc = product[0]?.img; // Assuming you want to get the color from the first product image
    useEffect(() => {
    const img = imgRef.current;

    if (img && img.complete) {
      getColor();
    } else {
      img.onload = getColor;
    }

    function getColor() {
      const colorThief = new ColorThief();
      const [r, g, b] = colorThief.getColor(img);
      if (r > 200 && g > 100 && b < 50) {
        // very rough "orange-ish" check
        setBgColor('bg-orange-100');
      } else {
        setBgColor('bg-gray-100');
      }
    }
  }, []);

    return(
         <>
                <section id="Projects"
                    className="bg-green-100 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-5">
                        {product?(
                            product.map((e)=>{
                                    return(
                                        <div key={e.id} className={`w-72 shadow-2xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl ${bgColor}`}
                                            onClick={()=>{handleClick(e.id, e.pname)}}
                                        >
                                            <Link
                                            to={`/product/${e.id}`}
                                            >
                                                <img ref={imgRef} src={e.img}
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