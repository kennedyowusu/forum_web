import { Icon } from '@iconify/react'
import { navLinkItems } from '../../utils/navLinkItems';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className='h-screen flex items-start justify-start px-4 pb-6'>
      <div className='flex flex-col space-y-6'>
        {navLinkItems.map((item) => (
    </div>
  )
}

export default Sidebar
