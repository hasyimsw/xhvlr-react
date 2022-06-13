import React from 'react'
import heroImage from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div className='w-full bgPrimary h-full '>
        <div className='max-w-[1240px] px-4 py-16 md:py-28 mx-auto'>
            <div className='grid lg:grid-cols-2 items-center justify-between text-white'>
                <div className=''>
                    <p className='text-2xl font-bold'>Unique Sequencing &amp; Production</p>
                    <h1 className='text-5xl font-bold'><span className='textPrimary'>Cloud</span> Management</h1>
                    <p className='text-xl font-bold py-2'>X<span className='textSecondary'>H</span>VLR. Tech</p>
                    <div className='font-bold mt-6'>
                        <button className='buttonPrimary px-10'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero