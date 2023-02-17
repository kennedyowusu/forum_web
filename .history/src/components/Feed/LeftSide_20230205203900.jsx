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
         <Link to={path} key={id} className=''>
       );
      })
      }
     
     </div>
    </div>
  )
}

export default LeftSide
