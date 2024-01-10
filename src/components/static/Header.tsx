import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' h-[70px] w-full flex justify-center items-center border-b'>
        <div className=' h-[89%] w-[95%] flex justify-between items-center'>
            <div>Logo</div>
            <div className='h-[70px] flex justify-center items-center gap-4 text-[12px] uppercase font-bold'>
                <NavLink to='/' className={({isActive})=> isActive? " cursor-pointer bg-orange-700 text-white rounded-md w-[70px] h-[30px] flex justify-center items-center border-b-2 border-b-gray-500": ""}>
                    Home
                </NavLink>
                <NavLink to='/about' className={({isActive})=> isActive? " cursor-pointer bg-orange-700 text-white rounded-md w-[70px] h-[30px] flex justify-center items-center border-b-2 border-b-gray-500": ""}>
                    About
                </NavLink>
                <NavLink to='/contact' className={({isActive})=> isActive? " cursor-pointer bg-orange-700 text-white rounded-md w-[70px] h-[30px] flex justify-center items-center border-b-2 border-b-gray-500": ""}>
                    Pricing
                </NavLink>
            </div>
            <div className=' w-[200px] h-[50px] flex justify-between items-center'>
                <Link to='/login'>
                <button className=' w-[70px] h-[30px] rounded-md border py-2 flex justify-center items-center'>Login</button>
                </Link>
                <div className=' w-[1px] h-[40px] bg-gray-600'/>
                <Link to='/register'>
                <button className=' w-[70px] h-[30px] rounded-md bg-orange-700 py-2 flex justify-center items-center'>Sign up</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header