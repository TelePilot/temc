import React, { useContext, useState, useEffect } from "react"
import ClientImage from "../components/misc/client-image.component"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import HeaderText from "../components/misc/header-text.component"
import Projects from "../components/projects/projects.component"
import { ProjectContext } from "../store/Project.context"

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled(motion.div)`
  max-width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 20px;
  @media screen and (max-width: 1000px) {
    padding: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`

const Text = styled(motion.p)`
  padding-bottom: 25px;
  max-width: 600px;

  @media screen and (max-width: 700px) {
    text-align: center;
    padding: 0;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

const transition = { duration: 0.35, ease: [0.8, 0.013, 0.23, 0.96] }
const ProjectExtended = () => {
  const { project } = useContext(ProjectContext)

  let id = useParams()

  const [projectExt, setProject] = useState("")
  useEffect(() => {
    const index = project.findIndex((x) => x.clientName.toLowerCase() === id.id)
    setProject(project[index])
  }, [id, project])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={transition}
    >
      <a href={projectExt.websiteLink}>
        <ImgContainer>
          <ClientImage image={projectExt.websiteImage} />
        </ImgContainer>
      </a>

      <TextContainer>
        <HeaderText>{projectExt.clientName}</HeaderText>
        <Text>{projectExt.description}</Text>
      </TextContainer>

      <Projects />
    </motion.div>
  )
}

export default ProjectExtended
