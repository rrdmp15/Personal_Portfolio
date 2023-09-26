import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { git, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, tags, image, source, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={()=> window.open
              (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github} 
                alt="github"
                className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flez-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}> #{tag.name}</p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my web development projects and discover my passion for creating innovative and functional solutions. With a focus on front-end and back-end development, I have worked on a variety of projects ranging from task management apps and online stores to interactive websites and APIs. Combining attractive design, seamless user experience, and clean code, I utilize technologies such as JavaScript (React, Vue.js), PHP (Laravel), and databases (MySQL, MongoDB) to deliver high-quality web solutions. Browse through my featured projects to see how I&apos;ve tackled challenges and created impactful web applications. If you&apos;re interested in collaborating or have any questions, feel free to reach out. I&apos;m excited to share my work and demonstrate how I can contribute to your next web project.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index)=>(
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");