import meeshologo from '../assets/meeshologo.svg'
import cartlogo from '../assets/CartIcon.svg'
import profileIcon from '../assets/ProfileIcon.svg'
import { Link } from 'react-router-dom'

function Header({...props}) {
  return (
    <div className=" text-neutral-600 flex gap-4 justify-between p-3 items-center border-b-neutral-900 border select-none">
        <div className='w-full h-full flex gap-4 '>
          <Link to="/" >
            <div className="  w-44 h-full">
                <img src={meeshologo} alt="Logo"  className='w-full h-full object-cover mix-blend-multiply'/>
            </div>
            </Link>
            <input type="search" className='w-72  text-neutral-500 outline-none px-2 overflow-x-auto rounded-lg text-xl border border-neutral-400 ' placeholder='Search products....'/>
        </div>
         <div className=" p-2 w-14 h-full flex justify-center gap-4">
            <img src={cartlogo} alt="Logo"  className='w-full h-full object-cover mix-blend-multiply'/>
            <img src={profileIcon} alt="profileIcon" className='w-full h-full object-cover mix-blend-multiply' />
        </div>
        
    </div>
  )
}

export default Header