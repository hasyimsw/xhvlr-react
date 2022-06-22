import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full pt-20 text-slate-200 bg-slate-900 pb-4'>
      <div className='max-w-[1240px] px-4 mx-auto'>
        <div>
          <h5>Solutions</h5>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <hr className='my-4 opacity-30' />
        <div className='flex items-center md:justify-between'>
          <div>Testing</div>
          <div className='flex'>
            <FaFacebook className='w-8' />
            <FaInstagram className='w-8' />
            <FaTwitter className='w-8' />
            <FaYoutube className='w-8' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer