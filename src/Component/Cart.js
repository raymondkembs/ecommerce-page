import '../index.css'

export default function Cart({id, onSelect, count}){
    return (
     <button className="p-2 m-3 w-[50%] rounded font-semibold bg-orange-300 hover:bg-orange-400 hover:text-red-700" onClick={() => onSelect?.(id, count)}>Add To Cart</button>
             
    )
}