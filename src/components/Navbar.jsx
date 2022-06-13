import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='w-full bgPrimary'>
        <div className='max-w-[1240px] h-20 text-white px-4 mx-auto flex items-center justify-between'>
            <div>
                <h1 className='text-3xl font-bold'>X<span className='textSecondary'>H</span>VLR.</h1>
            </div>
            <div className='hidden md:block'>
                <ul className='flex items-center font-bold text-white/70'>
                    <li className='p-3 hover:text-white'>Home</li>
                    <li className='p-3 hover:text-white'>About</li>
                    <li className='p-3 hover:text-white'>Support</li>
                    <li className='p-3 hover:text-white'>Platforms</li>
                    <li className='p-3 hover:text-white'>Pricing</li>
                </ul>
            </div>
            <div className='font-bold text-sm space-x-2 hidden md:block'>
                <button className='buttonTransparent'>Sign In</button>
                <button className='buttonPrimary'>Sign Up</button>
            </div>

            {/* hamburger menu */}
            <div onClick={handleNav} className='block md:hidden'>
                { nav ? <AiOutlineClose size={24} className='text-white cursor-pointer' /> : <AiOutlineMenu size={24} className='text-white cursor-pointer' /> }
            </div>

            {/* mobile menu */}
            <div className={nav ? 'w-6/12 p-3 bg-[#020f43] font-bold shadow-md shadow-slate-400 rounded-md absolute top-20 right-3 flex transition-all duration-700' : 'absolute right-[100%]'}>
                <ul className='text-white/80'>
                    <li className='p-2 hover:text-white'>Home</li>
                    <li className='p-2 hover:text-white'>About</li>
                    <li className='p-2 hover:text-white'>Support</li>
                    <li className='p-2 hover:text-white'>Platforms</li>
                    <li className='p-2 hover:text-white'>Pricing</li>
                    <div className='flex flex-col text-sm space-y-2 ml-1'>
                        <button className='buttonTransparent text-white'>Sign In</button>
                        <button className='buttonPrimary text-white'>Sign Up</button>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar