import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <Link to="/" className='flex items-center'>
            <img src="data:image/png;base64,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" 
            alt="logo" className='w-[70px] h-[70px]'/>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link to="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Log in 
              </Link>
              <Link to="#"  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Get started
              </Link>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li><NavLink to="/" 
                className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                  Home</NavLink>
                </li>
                <li><NavLink
                to="/about"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>About
                </NavLink>
                </li>
              <li>
                  <NavLink
                  to="/github"
                      className={({isActive}) =>
                          `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                          ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }> Github
                    </NavLink>
                </li>
                <li><NavLink to="/user" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                User
                    </NavLink>
                </li>
                </ul>
            </div>
          </div>
        </nav>
      </header>
    </div> 
    );
}


export default Header;
