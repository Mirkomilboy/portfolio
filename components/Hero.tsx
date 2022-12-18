import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Assalamu alaykum va rohmatullohi va barokatuh",
      `My name is ${pageInfo?.name} 🧔‍♂️`,
      "Love coding </ 💻 > and reading books 📚",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 30,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8'>
      <BackgroundCircles />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt="" />
      <div className='z-20'>
        <h2 className='font-bold text-sm text-gray-500 uppercase tracking-[15px] pb-2'>{pageInfo?.role}</h2>
        <h1 className='font-semibold text-2xl tracking-widest px-10'>
          <span className='mr-2'>{text}</span>
          <Cursor cursorColor="red" />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroBtn'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroBtn'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroBtn'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroBtn'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}