import React from 'react'
import DataServices from './DataServices'

const About = () => {
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1240px] pb-32 mx-auto px-4'>
          {/* data services */}
          <DataServices />
          <div className='pt-20 text-center'>
            <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
            <p className='text-2xl py-8 text-slate-500 md:w-8/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium molestias cupiditate magni nisi provident?</p>
          </div>
          <div className='grid md:grid-cols-3 gap-4 mx-auto text-center'>
            <div className='shadow-xl w-8/12 md:w-full mx-auto rounded-xl bg-slate-100 border p-4'>
              <p className='text-6xl font-bold textPrimary'>100%</p>
              <p className='text-slate-500 mt-2'>Completion</p>
            </div>
            <div className='shadow-xl w-8/12 md:w-full mx-auto rounded-xl bg-slate-300 border p-4'>
              <p className='text-6xl font-bold textSecondary'>24/7</p>
              <p className='text-[#082032] mt-2'>Delivery</p>
            </div>
            <div className='shadow-xl w-8/12 md:w-full mx-auto rounded-xl bg-slate-100 border p-4'>
              <p className='text-6xl font-bold textPrimary'>100K</p>
              <p className='text-slate-500 mt-2'>Transactions</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About