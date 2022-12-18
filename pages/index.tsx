import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { GetStaticProps } from 'next'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className='scroll-smooth bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>{pageInfo?.name} portfolio</title>
        <meta name="description" content="Top Rated Front-end Engineer at Upwork and Fiverr." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header socials={socials} />

      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>


      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>


      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>


      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>


      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <footer className='hidden lg:block sticky bottom-5 w-full'>
        <div className='flex items-center justify-end mr-10'>
          <Link href='#hero'>
            <img className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 transition ease-linear cursor-pointer' src="https://avatars.githubusercontent.com/u/35518234?v=4" alt="" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  }
}