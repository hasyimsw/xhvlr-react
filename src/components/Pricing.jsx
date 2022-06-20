import React from 'react'
import {CheckIcon} from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div className='w-full bgPrimary text-white py-20'>
        <div className='max-w-[1240px] mx-auto px-4'>
            <div>
                <h2 className='text-3xl pt-8 text-slate-200 text-center'>Pricing</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>The right price for your research.</h3>
                <p className='py-4 md:text-center text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate voluptates neque doloremque minima sit sed nam iste quos enim.</p>
            </div>

            <div className='grid md:grid-cols-2 pt-10'>
              <div className='bg-slate-200 text-[#082032] m-4 p-8 rounded-xl shadow-lg shadow-slate-500'>
                <span className='uppercase px-4 py-1 bg-[#1f00ff] rounded-2xl text-xs text-white'>Standard</span>
                <div>
                  <p className='text-6xl font-bold text-gray-800 py-4 flex'>$50<span className='text-xl text-gray-800 flex flex-col justify-end'>/mo</span></p>
                </div>
                <p className='text-2xl py-5 text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div className='flex flex-col'>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <button className='buttonPrimary text-white font-bold'>Get Started</button>
                </div>
              </div>
              <div className='bg-slate-200 text-[#082032] m-4 p-8 rounded-xl shadow-lg shadow-slate-500'>
                <span className='uppercase px-4 py-1 bg-[#1f00ff] rounded-2xl text-xs text-white'>Standard</span>
                <div>
                  <p className='text-6xl font-bold text-gray-800 py-4 flex'>$72<span className='text-xl text-gray-800 flex flex-col justify-end'>/mo</span></p>
                </div>
                <p className='text-2xl py-5 text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div className='flex flex-col'>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <p className='flex py-2 items-center text-slate-700'><CheckIcon className='w-8 mr-4 text-green-500' />Lorem, ipsum dolor.</p>
                  <button className='buttonPrimary text-white font-bold'>Get Started</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing