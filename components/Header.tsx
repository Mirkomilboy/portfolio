import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

export default function Header({socials}: Props) {
  return (
    <header className='sticky top-0 z-50 max-w-7xl mx-auto flex items-center justify-between'>
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center p-5'>
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon 
            key={social._id} 
            url={social.url} 
            fgColor='gray' 
            bgColor='transparent' 
            className='hover:scale-125 transition ease-linear' 
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
        >
        <Link href='#contact' className='flex items-center cursor-pointer text-gray-500 hover:text-white transition ease-linear p-5 mr-5'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span className='uppercase hidden md:inline-flex text-sm ml-2'>Get in touch</span>
        </Link>
      </motion.div>
    </header>
  )
}