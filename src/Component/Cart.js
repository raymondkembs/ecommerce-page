import '../index.css'

export default function Cart({id, onSelect, count, total}){
    return (
     <button className="cartButton p-2 m-3 rounded font-semibold bg-orange-300 hover:bg-orange-400 hover:text-red-700" onClick={() => onSelect?.(id, count)}>Add To Cart</button>
             
    )
}