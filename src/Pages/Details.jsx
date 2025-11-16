
import { useParams } from 'react-router-dom'





function Details() {

 let productId = useParams();
  console.log(productId)

  // product = products.filter((product)=> product.id === productId )

  return (
    <div className='w-[760px] h-[760px] mx-auto my-auto flex justify-between items-center select-none'>
        <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" className='h-[40%] w-[40%] rounded-full object-cover mix-blend-multiply ' alt="" />
        <div className="w-[50%]   text-black">
            <h1 className='text-black text-2xl font-semibold'> Title</h1>
            <p className='text-neutral-600 mt-1 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, placeat? </p>
            <div className="flex justify-between items-center w-full mt-1">
                <h2 className='text-xl font-semibold text-black'>Rs.300/-</h2>
                <h2 className='bg-green-300 px-4 py-1 text-white font-bold rounded-lg'>4.3*</h2>
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