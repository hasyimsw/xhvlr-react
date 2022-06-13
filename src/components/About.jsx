import React from 'react'
import { CloudUploadIcon, DatabaseIcon, ServerIcon, PaperAirplaneIcon } from '@heroicons/react/solid'
import DataServices from './DataServices'

const About = () => {
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1240px] pb-24 mx-auto px-4'>
          {/* data services */}
          <DataServices />

        </div>
    </div>
  )
}

export default About