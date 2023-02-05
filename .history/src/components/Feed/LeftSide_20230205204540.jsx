import React from 'react'
import { Link } from 'react-router-dom'
import { navLinkItems } from '../../utils/navLinkItems'
import { Icon } from '@iconify/react'


const LeftSide = () => {
  return (
    <div className='w-[10rem]'>
      <div className='pt-4 pl-8'>
        {navLinkItems.map((item) => {
          const { id, title, path, icon } = item
          return (
            <Link
              to={path}
              key={id}
              className='flex items-center p-2 space-x-2 rounded-md hover:bg-gray-200 pt-4 pb-4'
            >
              <Icon icon={icon} className='text-2xl' />
              <p className=''>{title}</p>
            </Link>
          )
        })}

        <div className='border-b'></div>
      </div>
    </div>
  )
}

export default LeftSide
