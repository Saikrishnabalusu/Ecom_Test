import meeshologo from '../assets/meeshologo.svg'
import cartlogo from '../assets/CartIcon.svg'
import profileIcon from '../assets/ProfileIcon.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header({...props}) {
  const {value:cartItems}=useSelector((state)=>state.cart)
  return (
    <div className="w-screen h-16 text-neutral-600 flex gap-4 justify-between bg-white p-2 items-center border-b-neutral-900 border select-none sticky top-0 z-10">
        <div className='w-full h-full flex gap-4 '>
          <Link to="/" >
            <div className="w-64 h-full ">
                <img src={meeshologo} alt="Logo"  className='w-full h-full object-cover mix-blend-multiply'/>
            </div>
            </Link>
            <input type="search" className='w-96  text-neutral-500 outline-none px-2 overflow-x-auto rounded-lg text-xl border border-neutral-400 ' placeholder='Search products....'/>
        </div>
         <div className="w-32 h-full flex justify-center gap-6 pr-4">
            <div className='w-full h-full relative' >
              <img src={cartlogo} alt="Logo"  className='w-full h-full object-cover mix-blend-multiply'/>
              <div className='absolute top-0 -right-1 w-5 h-5 bg-red-600 text-white text-sm font-medium rounded-full text-center '>{cartItems.length}</div>
            </div>
            <div className='w-full h-full ' >
              <img src={profileIcon} alt="profileIcon" className='w-full h-full object-cover mix-blend-multiply' />
            </div>
            
        </div>
        
    </div>
  )
}

export default Header