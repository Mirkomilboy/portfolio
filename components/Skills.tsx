import {motion} from "framer-motion"
import { Skill as SkillType } from "../typings"
import Skill from "./Skill"

type Props = {
  skills: SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen relative max-w-7xl flex flex-col xl:flex-row items-center justify-center mx-auto text-center md:text-left xl:px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for proficiency</h4>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills