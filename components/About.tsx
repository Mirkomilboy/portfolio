import {motion} from 'framer-motion'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo;
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{duration: 1.5 }}
    className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img 
      initial={{
        x: -200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      className="-mb-20 md:mb-0 shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      src={urlFor(pageInfo?.profilePic).url()} />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background about me!</h4>
        <p className='text-sm'>{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}

export default About