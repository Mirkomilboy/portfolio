import {motion} from "framer-motion"
import {SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiAlpinedotjs, SiReact, SiNextdotjs, SiVuedotjs, SiUpwork, SiFiverr} from "react-icons/si"
import { urlFor } from "../sanity"
import { Experience } from "../typings"


type Props = {
  experience: Experience
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 w-full sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] cursor-pointer overflow-hidden shrink-0 opacity-80 hover:opacity-100 transition ease-linear p-5 sm:p-10">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{duration: 1.2}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
      className="w-20 md:w-32 h-20 md:h-32 rounded-full xl:w-48 xl:h-48 object-cover object-center" src={urlFor(experience?.companyImage).url()} />

      <div className="px-0 md:px-10">
        <h4 className="font-light text-3xl">{experience.jobTitle}</h4>
        <p className="mt-1">at {experience.company}</p>
        <div className="flex flex-wrap text-gray-500">
          {experience.technologies.map((technology) => (
            <img key={technology._id} src={urlFor(technology?.image).url()} className="w-6 sm:w-10 h-6 sm:h-10 rounded-full object-contain m-2" alt="" />
          ))}
        </div>
        <p className="uppercase text-sm tracking-wider py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm sm:text-base md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard