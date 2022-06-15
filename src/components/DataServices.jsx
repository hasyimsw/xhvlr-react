import React from 'react'
import { CloudUploadIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from '@heroicons/react/solid'

const DataServices = () => {
  return (
    <>
        <div className='px-4 bgPrimary text-white p-2 mt-[-70px] md:mt-[-60px] text-center lg:w-8/12 mx-auto rounded-lg border-4 border-[#ff9201] shadow-xl'>
            <h2 className='pb-4 text-lg font-bold'>Data Services</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-between md:gap-4'>
                <p className='py-2 mx-auto flex items-center'><CloudUploadIcon className='h-6 textSecondary' /> App Security</p>
                <p className='py-2 mx-auto flex items-center'><DatabaseIcon className='h-6 textSecondary' /> Dashboard</p>
                <p className='py-2 mx-auto flex items-center'><ServerIcon className='h-6 textSecondary' /> Cloud Data</p>
                <p className='py-2 mx-auto flex items-center'><PaperAirplaneIcon className='h-6 textSecondary' /> API</p>
            </div>
        </div>
    </>
  )
}

export default DataServices