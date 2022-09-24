import React, { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import RecentProject from '../components/RecentProject/RecentProject'
import TopPage from './TopPage'

const ProjectPage = () => {
  return (
    <Fragment>
      <NavigationBar/>
      <TopPage title='All Projects'/>
      <RecentProject/>
      <Footer/>
    </Fragment>
  )
}

export default ProjectPage
