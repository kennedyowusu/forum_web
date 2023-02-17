import { Icon } from '@iconify/react'
import { navLinkItems } from '../../utils/navLinkItems';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div class='h-screen flex items-end justify-end px-4 pb-6'>
      <button class='relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition'>
        <span class='text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            class='w-6 m-auto'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z'
            />
          </svg>
        </span>
      </button>

      <div class='z-20 fixed top-0 -left-96 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
        <nav role='navigation' class='p-6'>
          <div class='flex items-center gap-4 pb-4'>
            <h1 class='text-2xl font-bold tracking-wider uppercase text-gray-800'>
              <span class='text-cyan-500'>Forum</span>
            </h1>
            <img
              class='w-8'
              src='https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg'
              alt='tailus-logo'
            />
          </div>

          <div class='relative'>
            <form
              action=''
              class='text-gray-500 focus-within:text-cyan-400 focus-within:bg-white focus-within:shadow rounded search transition duration-300'
            >
              <div class='relative w-full'>
                <div class='absolute top-0 bottom-0 h-full flex items-center mb-auto left-4'>
                  <svg
                    xmlns='http://ww50w3.org/2000/svg'
                    class='w-4 fill-current'
                    viewBox='0 0 35.997 36.004'
                  >
                    <path
                      id='Icon_awesome-search'
                      data-name='search'
                      d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  placeholder='Search...'
                  name='search'
                  id='search'
                  class='text-sm text-gray-500 placeholder-gray-500 w-full rounded py-3 pr-4 pl-12 bg-gray-200 bg-opacity-75 outline-none focus:bg-transparent focus:rounded-3xl transition-all'
                />
              </div>
            </form>
          </div>

          <div class='mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]'>
            <ul class='space-y-4 mb-12 px-4 mt-8'>
              {navLinkItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className='flex gap-4 text-gray-600 hover:text-gray-800 transition'
                  >
                    <Icon
                      icon={item.icon}
                      className='
                      
              {/* <li>
                <NavLink
                  to='/'
                  className='flex gap-4 text-gray-600 hover:text-gray-800 transition'
                >
                  <Icon
                    icon='material-symbols:home-outline-rounded'
                    className='
                    w-6 h-6 text-teal-600 hover:text-gray-800 transition
                    '
                  />
                  Home
                </NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>

      <div class='z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200'></div>
    </div>
  )
}

export default Sidebar
