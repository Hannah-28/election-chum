import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function UserSidebar({ title, children }) {
  const { toggleSidebar, broken } = useProSidebar();

  return (
    <div>
      <Head>
        <title>{title ? 'ELECTION CHUM | ' + title : 'ELECTION CHUM '}</title>
        <meta name="description" content="Voting Website" />
        <link
          rel="icon"
          href="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        />
      </Head>

      <div className="flex h-full side">
        <Sidebar customBreakPoint="900px" transitionDuration={1000}>
          <Menu className="bg-black h-full">
            <div className="p-5">
              <Image
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>

            <MenuItem
              routerLink={<Link href="/candidates" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Candidates
            </MenuItem>
            
            {/* <MenuItem
              routerLink={<Link href="/vote" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Vote
            </MenuItem> */}
            <MenuItem
              routerLink={<Link href="/results" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Results
            </MenuItem>
            <MenuItem
              routerLink={<Link href="/profile" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Profile
            </MenuItem>
            <MenuItem
              routerLink={<Link href="/review" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Review
            </MenuItem>
            <MenuItem
              routerLink={<Link href="/users" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Users
            </MenuItem>
            <MenuItem
              routerLink={<Link href="/login" />}
              className="text-indigo-500 hover:text-black my-3 text-base font-medium"
            >
              Logout
            </MenuItem>
          </Menu>
        </Sidebar>
        <main className="w-full p-3">
          <div>
            {broken && (
              <button className="sb-button" onClick={() => toggleSidebar()}>
                <Bars3Icon className="h-7 w-7 text-black" />
              </button>
            )}
          </div>

          
            <div className="w-full">{children}</div>
          
          <footer className="flex justify-center items-center text-center my-10">
            <p className="text-sm">
              &copy; 2022 - 2023 ELECTION CHUM, ALL RIGHTS RESERVED
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
