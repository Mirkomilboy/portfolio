import {motion} from "framer-motion"
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img 
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        className="w-24 h-24 rounded-full border border-gray-500 object-contain filter group-hover:grayscale transition ease-linear"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white w-24 h-24 rounded-full z-0 transition ease-linear">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl xl:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill