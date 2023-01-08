import React, { useState } from 'react';
import Head from 'next/head';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>
          {title ? 'ELECTION CHUM | ' + title : 'ELECTION CHUM '}
        </title>
        <meta name="description" content="Voting Website" />
        <link
          rel="icon"
          href="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        />
      </Head>

      <nav className="bg-black fixed top-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between nav">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-3">
                  <Link
                    href="/"
                    className=" hover:text-indigo-500 text-white px-3 py-2 text-base font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    href="/process"
                    className="hover:text-indigo-500 text-white px-3 py-2 text-base font-medium"
                  >
                    Process
                  </Link>

                  <Link
                    href="/contact"
                    className="hover:text-indigo-500 text-white px-3 py-2 text-base font-medium"
                  >
                    Contact
                  </Link>

                  <Link
                    href="/login"
                    className="hover:text-indigo-500 text-white px-3 py-2 text-base font-medium"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div {...ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  href="/process"
                  className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Process
                </Link>

                <Link
                  href="/contact"
                  className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>

                <Link
                  href="/login"
                  className="text-white hover:bg-indigo-500  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <main className="children">
        <div className="w-full mx-auto px-0">{children}</div>
      </main>

      <footer className="flex justify-center items-center text-center my-10">
        <p className="text-sm">
          &copy; 2022 - 2023 ELECTION CHUM, ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}
