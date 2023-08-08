import React from 'react'
import bkms from '../Assets/bkms.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <div className='bg-[#333545]  text-white w-full md:flex text-center items-center justify-center'>
        <div className='w-full md:w-[60%] md:flex md:ml-[200px]' >
            
            <img src={bkms} alt="bookmyshow" className='ml-[200px] w-[130px] md:ml-10 md:w-[90px] h-[70px]' />
           
            <input type='text' placeholder='Search For Best Movie' className='md:ml-5 text-center w-full md:w-[40%] h-fit items-center p-2  mt-4 rounded-sm active:border-none ' />
        </div>
        <div className='w-full md:w-[40%]'>
            <button className='bg-[#f84464] text-white px-4  py-1 md:py-2 my-2 md:my-0 rounded-sm'>sign in</button>
        </div>
    </div>
    <div className='bg-[#222539] text-white md:flex'>
        <div className='w-full md:w-[60%]'>
        
               
               
            <ul className='list-none flex py-2 ml-[30px] text-md md:text-lg md:ml-[195px]'>
               <Link to='/'> <li>Home</li></Link>
                <li className='ml-4'>Movies</li>
                <li className='ml-4'>Streams</li>
                <li className='ml-4'>Events</li>
                <li className='ml-4'>Plays</li>
                <li className='ml-4'>Sports</li>
                <li className='ml-4'>Activities</li>
                <li className='ml-4'>Buzz</li>
            </ul>
        </div>
        <div className='w-full md:w-[40%]'>
            <ul className='list-style-none flex py-2 ml-[30px] text-md md:text-lg md:ml-[195px]'>
                <li className='ml-4'>list Your Show</li>
                <li className='ml-4'>Corporates</li>
                <li className='ml-4'>Offers</li>
                <li className='ml-4'>Gift Cards</li>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Navbar