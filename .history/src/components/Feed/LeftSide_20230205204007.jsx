import React from 'react'
import { Link } from 'react-router-dom'
import { navLinkItems } from '../../utils/navLinkItems'
import { Icon } from '@iconify/react'


const LeftSide = () => {
  return (
    <div className=''>
    <div className=''>
     {
      navLinkItems.map((item) => {
        const { id, title, path, icon } = item
       return (
        {/* <Link to={path} key={id} className='lex items-center p-2 space-x-2 rounded-md hover:bg-gray-200'>
         <Icon icon={icon} className='text-2xl' />
         <p className=''>{title}</p>

        </Link> */}

        <Link to={path} key={id} className='flex items-center p-2 space-x-2 rounded-md hover:bg-gray-200'>
         <span className='material-icons-outlined text-gray-500'>{icon}</span>
         <span className='text-gray-500'>{title}</span>
        </Link>

       );
      })
      }
     
     </div>
    </div>
  )
}

export default LeftSide
