
import { Link } from 'react-router-dom'

function Card({image,price,title,...props}) {
  
  return (
    <Link to= {`/Details/${props.id}`}> 
    <div className='w-44 h-56 border-2 ml-2 mt-2  border-slate-500  shadow-2xl rounded-md cursor-pointer select-none' >
        <img src={image} alt="image" className='w-full h-[60%] object-cover rounded-t-md' />
        <h1 className='px-2 text-ellipsis line-clamp-1 text-neutral-500'>{title}</h1>
        <h1 className='px-2 font-semibold'> Rs.{price*90}/- </h1>
        <div className= {props.rating>4 ?'h-6 w-12 bg-green-200 rounded-lg text-center font-semibold mt-2 ml-1' : 'h-6 w-12 bg-red-200 rounded-lg text-center font-semibold mt-2 ml-1'}> 
            <p className=''> {props.rating}{'\u2605'}</p>
        </div>

    </div>
    </Link>
  )
  
}

export default Card