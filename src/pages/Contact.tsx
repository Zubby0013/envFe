import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-[#39A88E] w-full h-[80vh] flex justify-center items-center'>
        <div className='w-[75%] h-[75%] grid grid-rows-3'>
            <div className=' row-span-1  text-white flex justify-center'>
                <div className=' text-[40px] font-[500] w-[80%] text-center' >How to become a delivery courier in Nigeria</div>
            </div>
            <div className=' row-span-2  grid grid-cols-2 text-white'>
                <div className=' col-span-1 flex justify-center items-center flex-col'>
                    <div className=' bg-[#FF4500] rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>1</div>
                    <div className=' text-[25px] font-[500] my-4'>Complete the sign-up form</div>
                    <div className=' w-[350px] text-center'>Submit an application with your details and documents.</div>
                </div>
                <div className=' col-span-1 flex justify-center items-center flex-col'> 
                <div className=' bg-[#FF4500] rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>2</div>
                    <div className=' text-[25px] font-[500] my-4'>Start earning</div>
                    <div className=' w-[350px] text-center'>Once onboarding is done, you'll receive your Bolt Food bag and you're ready to start delivering and earning.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;