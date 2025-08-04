import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from 'react'
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import '../index.css'

const navigation = [
  { name: 'Collections', href: '/collections' },
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/page' },
  // { name: 'Contact', href: '/other4' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  const [opens, setOpens] = useState(false);
  const { product } = useContext(ProductContext);
  const { selectedItems, removeFromCart} = useContext(CartContext);
  // console.log(product);
  const myRef = useRef(null);
  const handlesCart = () =>{
    setOpens(!opens);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myRef.current && !myRef.current.contains(event.target)) {
        setOpens(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-white bold-600 px-5 text-2xl font-bold">
              sneakers
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive})=>{
                      return( 'no-underline rounded-md px-3 py-2 text-sm font-medium' + 
                      (isActive? 'no-underline bg-gray-900 text-white' 
                      : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white'))
                  }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={handlesCart}
              type="button"
              className="relative rounded-full bg-gray-800 p-1 mr-2 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              🛒{selectedItems.length > 0?<span className="myValue">{selectedItems.length}</span>: null}
              {/* <BellIcon aria-hidden="true" className="size-6" /> */}
            </button>
            <div className="cart z-[100]"
              style={{display: opens ? 'block' : 'none'}}
              ref={myRef}
            >
              {/* Optional dropdown */}
              <div className="cart-preview">
                {selectedItems.length > 0? 
                selectedItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-white border-b p-4">
                      <img src={item.img} alt={item.pname} className="w-16 h-16 rounded-lg" />
                      <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold">{item.pname}</span>
                        <span className="text-gray-500">${item.nprice}</span>
                      </div>
                      <button className="flex items-center justify-between text-red-500 hover:text-white hover:bg-gray-700 pt-2 pr-3 pl-3 pb-2 bg-gray-200 rounded-full"
                      onClick={() => removeFromCart(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                )): 
                (
                  <>
                      <div className="cart-imgs">
                          <img src={`${process.env.PUBLIC_URL}/images/illustration-empty-cart.svg`} alt="image of emptiness"/>
                      </div>
                      <div className="cart-info">No Items Selected</div> 
                  </>
            )
                }
              </div>
              {selectedItems.length > 0? 
                  <div className="flex items-center justify-center bg-white border-b p-4">
                      <button className="flex items-center justify-center text-red-500 hover:text-white hover:bg-orange-500 w-full p-2 bg-gray-200 rounded">
                        Checkout
                      </button>
                  </div>
                :null}
               </div>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={`${process.env.PUBLIC_URL}/images/japanesethemetwo.jpg`}
                    className="size-8 rounded-full object-cover"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({isActive})=>{
                return( 'block no-underline rounded-md px-3 py-2 text-sm font-medium' + 
                (isActive? 'no-underline bg-gray-900 text-white' 
                : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white'))
            }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
      
    </Disclosure>
      <div className="bg-green-100">
          <div className="min-h-screen">
            {props.children}
          <div>
      </div>
    </>
  )
  
}
