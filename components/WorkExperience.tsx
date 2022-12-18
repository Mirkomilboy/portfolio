import {motion} from "framer-motion"
import { Experience } from "../typings"
import ExperienceCard from "./ExperienceCard"

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen relative flex flex-col md:flex-row items-center justify-evenly max-w-full mx-auto text-left px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience