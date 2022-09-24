import React from 'react'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopPage from './TopPage'

const ProjectDetailsPage = () => {
  return (
    <>
      <NavigationBar/>
      <TopPage title='Project Details'/>
      <ProjectDetails/>
      <Footer/>
    </>
  )
}

export default ProjectDetailsPage
