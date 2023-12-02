'use client';
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { HiUser, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";



const navLinks = [
  { title: <HiUser />, path: '#about'},
  { title: <HiRectangleGroup />, path: '#projects'}, 
  { title: <HiChatBubbleBottomCenterText />, path: '#testimonials'},
  { title: <HiEnvelope />, path: '#email'},
];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 mx-auto border border-primary-950 bg-primary-950 bg-opacity-5">
      <div className="container flex flex-wrap items-center justify-around px-4 py-2 mx-auto lg:py-4">
      <Link href={"/"} className="text-5xl font-semibold text-indigo-800 ">
      <Image
              src={'/logo.png'}
              width={80}
              height={4}
              alt='logo'
              priority={true}
            />
      </Link>
      <div className="block mobile-menu md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-secondary-500 border-primary-800 hover:text-orange-500 hover:border-orange-500"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar