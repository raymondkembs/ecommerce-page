import '../index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import { useContext } from 'react';

export default function Menshoes(){
    const { product } = useContext(ProductContext);
    const navigate = useNavigate();
    const handleClick = (val, name) => {
        navigate('/product/'+name, { state: { product: product[val-1]}})
    }
    return(
         <>
                <section id="Projects"
                    className="bg-green-100 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-5">
                        {product?(
                            product
                            .filter(e => e.gender === 'male')
                            .map((e)=>{
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