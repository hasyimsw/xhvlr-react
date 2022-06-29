import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full pt-10   text-slate-200 bg-slate-900 pb-4'>
      <div className='max-w-[1240px] px-4 mx-auto'>
        <div className='grid md:grid-cols-6'>
          <div>
            <h5 className='font-bold uppercase text-lg pt-2'>Solutions</h5>
            <ul>
              <li className='py-1 text-sm'>Marketing</li>
              <li className='py-1 text-sm'>Analytics</li>
              <li className='py-1 text-sm'>Commerce</li>
              <li className='py-1 text-sm'>Data</li>
              <li className='py-1 text-sm'>Cloud</li>
            </ul>
          </div>
          <div>
            <h5 className='font-bold uppercase text-lg pt-2'>support</h5>
            <ul>
              <li className='py-1 text-sm'>Pricing</li>
              <li className='py-1 text-sm'>Documetations</li>
              <li className='py-1 text-sm'>Guides</li>
              <li className='py-1 text-sm'>API Status</li>
            </ul>
          </div>
          <div>
            <h5 className='font-bold uppercase text-lg pt-2'>Company</h5>
            <ul>
              <li className='py-1 text-sm'>About</li>
              <li className='py-1 text-sm'>Blog</li>
              <li className='py-1 text-sm'>Jobs</li>
              <li className='py-1 text-sm'>Press</li>
              <li className='py-1 text-sm'>Partners</li>
            </ul>
          </div>
          <div>
            <h5 className='font-bold uppercase text-lg pt-2'>Legal</h5>
            <ul>
              <li className='py-1 text-sm'>Claims</li>
              <li className='py-1 text-sm'>Privacy</li>
              <li className='py-1 text-sm'>Term</li>
              <li className='py-1 text-sm'>Policies</li>
              <li className='py-1 text-sm'>Conditions</li>
            </ul>
          </div>
          <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase text-lg'>subscribe to our newsletter</p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row' action="">
              <input className='w-full p-2 mr-2 rounded-md mb-4' type="email" />
              <button className='p-2 mb-4 bg-[#1f00ff] rounded-md text-sm font-bold'>Subscribe</button>
            </form>
          </div>

        </div>
        <hr className='my-4 opacity-30' />
        <div className='flex items-center sm:justify-between'>
          <div>2022 Workflow, LLC. All rights reserved.</div>
          <div className='flex'>
            <FaFacebook className='w-8' />
            <FaInstagram className='w-8' />
            <FaTwitter className='w-8' />
            <FaYoutube className='w-8' />
            <FaGithub className='w-8' />
          </div>
        </div>
        <p>CODED BY HASYIM</p>
      </div>
    </div>
  )
}

export default Footer