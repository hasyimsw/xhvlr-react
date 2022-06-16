import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import supportImage from '../assets/support.jpg'

const Support = () => {
  return (
    <div className='w-full h-full mt-24 bgPrimary'>
      <div className='w-full h-[700px] bg-gray-900/100 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImage} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-200 text-center'>SUPPORT</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>Finding The Right Team</h3>
          <p className='py-4 md:text-center text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id exercitationem nisi rerum minus et cumque fuga hic, aliquid veniam tempora molestias omnis nesciunt sunt nihil aliquam fugiat consequatur dolor?</p>
        </div>

        <div className='grid grid-cols1 md:grid-cols-3 relative gap-x-8 gap-y-16 px-4 py-2 pb-24 sm:pt-32'>

          <div className='bg-white rounded-xl shadow-2xl text-black'>
            <div className='p-8'>
              <PhoneIcon className='w-16 p-4 bg-[#1f00ff] text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-4 text-slate-800'>Sales</h3>
              <p className='text-slate-500 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam nihil explicabo rerum quidem officiis perferendis perspiciatis aspernatur, provident dolore?</p>
            </div>
            <div className='bg-slate-200 pl-8 py-4 textSecondary rounded-b-lg'>
              <p className='flex items-center font-bold'>Contact Us <ArrowSmRightIcon className='w-6 mt-1 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl text-black'>
            <div className='p-8'>
              <SupportIcon className='w-16 p-4 bg-[#1f00ff] text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-4 text-slate-800'>Support</h3>
              <p className='text-slate-500 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam nihil explicabo rerum quidem officiis perferendis perspiciatis aspernatur, provident dolore?</p>
            </div>
            <div className='bg-slate-200 pl-8 py-4 textSecondary rounded-b-lg'>
              <p className='flex items-center font-bold'>Contact Us <ArrowSmRightIcon className='w-6 mt-1 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl text-black'>
            <div className='p-8'>
              <ChipIcon className='w-16 p-4 bg-[#1f00ff] text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-4 text-slate-800'>Media</h3>
              <p className='text-slate-500 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam nihil explicabo rerum quidem officiis perferendis perspiciatis aspernatur, provident dolore?</p>
            </div>
            <div className='bg-slate-200 pl-8 py-4 textSecondary rounded-b-lg'>
              <p className='flex items-center font-bold'>Contact Us <ArrowSmRightIcon className='w-6 mt-1 ml-2' /></p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Support