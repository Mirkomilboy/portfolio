import {motion} from "framer-motion"
import { urlFor } from "../sanity"
import { Project } from "../typings"

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen relative max-w-7xl flex flex-col md:flex-row items-center justify-evenly mx-auto text-center md:text-left overflow-hidden z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects?.map((project, i) => (
          <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">
            <motion.img 
            initial={{opacity: 0, y: -200}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="w-80 md:w-96" src={urlFor(project?.image).url()} alt="" />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
              <h4 className="text-3xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} of {projects.length}:</span> {project?.title}</h4>
              
              <div>
                <h5 className="font-semibold text-center text-white pb-2">Used technologies in the project:</h5>
                <div className="flex items-center justify-center space-x-4">
                  {project?.technologies.map((technology) => (
                    <img key={technology._id} src={urlFor(technology?.image).url()} alt={technology.title} className="w-8 h-8 object-cover" />
                  ))}
                </div>
              </div>

              <p className="text-lg text-center md:text-left">{project.summary}</p>

              <h4 className="text-xl text-white">Link to the work: <a target="_blank" rel="noreferrer" href={project.linkToBuild} className="underline decoration-[#F7AB0A]/50 hover:no-underline">{project.linkToBuild}</a></h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects