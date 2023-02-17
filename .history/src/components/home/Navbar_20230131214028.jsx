import logo from '../assets/logo.png'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { navLinkItems } from '../../utils/navLinkItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full h-[80px]'>
      <div className='px-4 flex justify-between items-center h-full w-full bg-[#6B7A8F]'>
        <div className='items-center flex'>
          <img src={logo} alt='Logo' height={50} width={50} />
          <h1 className='px-3 text-2xl font-bold text-white'>Logo</h1>
        </div>
        <div className='pr-4 md:flex items-center'>
          <ul className='hidden md:flex justify-between font-bold text-sm mr-10 '>
            {navLinkItems.map((item) => {
              return (
                <li key={item.id} className='nav-link-item'>
                  {item.title}
                </li>
              )
            })}

            <li className='px-5 py-2 text-white font-bold border-2 border-white ml-4'>
              Sign In
            </li>
          </ul>

          {/* Navigation Menu Icon */}
          <div className='md:hidden'>
            <Icon
              icon={
                !isOpen
                  ? 'mdi:microsoft-xbox-controller-menu'
                  : 'mdi:close-circle-outline'
              }
              className='text-white text-2xl'
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Create Mobile Menu */}
      {isOpen && (
        <div className='md:hidden'>
          <ul className='md:hidden font-bold text-sm mr-10 bg-[#6B7A8F] bg-opacity-100 flex flex-col w-full h-screen absolute left-0  text-center p-4'>
            {navLinkItems.map((item) => {
              return (
                <li key={item.id} className='nav-link-item'>
                  {item.title}
                </li>
              )
            })}
            <hr
              className='
      border-white-500 border-opacity-25 border-1 w-full my-4
            '
            />
            <li
              className='px-5 py-2 text-teal-500 font-bold 
            border-2 border-white rounded hover:bg-teal-500 hover:text-white
          '
            >
              Sign In
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
