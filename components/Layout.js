import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/Store';
import DropdownLink from '../components/DropdownLink';
import Cookies from 'js-cookie';

const Layout = ({ title, children }) => {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - KRATOM' : 'KRATOM'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex flex-col justify-between min-h-screen bg-[#7dd779]">
        <header className="">
          <nav className="flex items-center justify-between h-12 px-4 shadow-md bg-[#407a3d]">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold ">
                <img className="w-[12rem]" src="/assets/logo/Kratomsy.svg" />
              </a>
            </Link>
            <div>
              <Link legacyBehavior href="/cart">
                <a className="p-2 font-semibold text-[#7dd779] text-[1.25rem] hover:text-white ease-in-out duration-300">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="px-2 py-1 ml-1 text-xs font-bold text-white bg-red-600 rounded-full">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button
                    className="text-[#7dd779] text-[1.25rem] font-semibold 
                                          hover:text-white ease-in-out duration-300"
                  >
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items
                    className="absolute right-0 w-56 origin-top-right 
                              shadow-lg text bg-[#407a3d] text-[#7dd779]"
                  >
                    <Menu.Item className="hover:text-[#407a3d]">
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>

                    <Menu.Item className="hover:text-[#407a3d]">
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-histoy"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item className="hover:text-[#407a3d]">
                      <Link legacyBehavior href="#">
                        <a
                          className="dropdown-link hover:text-[#407a3d]"
                          href="#"
                          onClick={logoutClickHandler}
                        >
                          Logout
                        </a>
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link legacyBehavior href="/login">
                  <a className="p-2 font-semibold text-[#7dd779] text-[1.25rem] hover:text-white ease-in-out duration-300">
                    Login
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="flex items-center justify-center h-10 shadow-inner bg-[#407a3d] text-[#7dd779]">
          Copyright &copy; 2023 KRATOMSY | By MANDANA
        </footer>
      </div>
    </>
  );
};

export default Layout;
