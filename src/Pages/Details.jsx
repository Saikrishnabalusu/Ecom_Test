
import { useParams } from 'react-router-dom';
import  store  from "../Store/store.js";
import { addToCart, cartSlice, removeFromCart } from '../Store/CartSlice.js';
import { useSelector } from 'react-redux';


function Details() {

  let {id} = useParams();  // useParams returns object with key id and the value is string not int ex. {id:"2"}
  const productId = parseInt(id); // parsing the string to an integer
  const {products} = useSelector((state)=>state.products)  // redux hook to select & subscribe the a state from redux store
  const [detailedProduct] = products.filter((product)=>product.id === productId)

  return (
    <div className='w-[760px] h-[760px] mx-auto my-auto flex justify-between items-center select-none'>
        <img src={detailedProduct.image} className='h-[40%] w-[40%] rounded-full object-cover mix-blend-multiply ' alt="" />
        <div className="w-[50%]   text-black">
            <h1 className='text-black text-2xl font-semibold'> {detailedProduct.title}</h1>
            <p className='text-neutral-600 mt-1 '> {detailedProduct.description} </p>
            <div className="flex justify-between items-center w-full mt-1">
                <h2 className='text-xl font-semibold text-black'>Rs. {detailedProduct.price*90}/-</h2>
                <h2 className={detailedProduct.rating.rate > 4 ? 'bg-green-300 px-4 py-1 text-white font-bold rounded-lg':'bg-red-300 px-4 py-1 text-white font-bold rounded-lg'}>{detailedProduct.rating.rate}{'\u2605'}</h2>
            </div>
            <div className="flex justify-between items-center gap-2 mt-4">
                <button className='px-3 py-2 bg-black text-white text-xl font-semibold rounded-lg'>  Add to Cart </button>
                <button className='px-3 py-2 bg-black text-white text-xl font-semibold rounded-lg'> Add to WishList </button>
            </div>
        </div>
    </div>
  )
}

export default Details