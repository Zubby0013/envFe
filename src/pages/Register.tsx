import React from 'react';
import logo from '../assets/prowork.png';
import pix from '../assets/second.png'
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import apple from '../assets/Apple.png'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className=' max-h-screen w-full pl-9'>
       <div className=' w-full h-[70px] mb-10 overflow-hidden'>
        <Link to="/">
          <img src={logo} alt="" className=' object-contain w-[40%] lg:w-[20%] h-[90%]' />
        </Link>
       </div>
       <div className=' lg:grid lg:grid-cols-2 w-[90%] h-[400px]'>
       <div className=' w-[93%] h-[400px]'>
        <div className=' text-[30px] font-[500] mb-6'>Sign up</div>
          <div className=' my-6'>
            <button className=' w-full h-[40px] border rounded-lg flex justify-center items-center'>
              <img src={google} alt="" className=' w-[20px] h-[20px]'/> Continue with Google
            </button>
            <button className=' w-full h-[40px] border rounded-lg my-4 flex justify-center items-center'>
              <img src={facebook} alt="" className=' w-[20px] h-[20px]'/> Continue with Facebook
            </button>
            <button className=' w-full h-[40px] border rounded-lg flex justify-center items-center'>
              <img src={apple} alt="" className=' w-[20px] h-[20px]'/>  Continue with Apple
            </button>
          </div>
          <div>
            <input type="text" placeholder='Enter email' className=' w-full h-[40px] border rounded-lg px-4 outline-none'/>
            <input type="text" placeholder='Enter password' className=' w-full h-[40px] border rounded-lg my-4 px-4 outline-none'/>
            <input type="text" placeholder='Comfirm password' className=' w-full h-[40px] border rounded-lg mb-4 px-4 outline-none'/>
            <Link to='/verify'>
            <button className=' w-full h-[40px] border rounded-lg bg-[#bb66d2] text-white'>
              Sign up Account
            </button>
            </Link>
          </div>
          <div className=' text-[15px] my-4'>By continuing with Google, Apple, or Email, you agree to Todoist’s <span className=' underline'>Terms of Service</span> and <span className=' underline'>Privacy Policy.</span></div>
          <div className=' w-full h-[1px] bg-gray-400 mb-4'/>
          <div className=' text-[15px] text-center'>Already have an account?
          <Link to='/login'>
          <span className=' underline'>Log in here</span>
          </Link> 
          </div>
          <div className=' h-[30px]'/>
       </div>
         <div className=' hidden lg:block'>
           <img src={pix} alt="" className=' animate-pulse transition-all duration-500'/>
         </div>
       </div>
    </div>
  )
};

export default Register