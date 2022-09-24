import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../../pages/AboutPage'
import ContactPage from '../../pages/ContactPage'
import HomePage from '../../pages/HomePage'
import ProjectDetailsPage from '../../pages/ProjectDetailsPage'
import ProjectPage from '../../pages/ProjectPage'
import ServicesPage from '../../pages/ServicesPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='services' element={<ServicesPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/project-details' element={<ProjectDetailsPage/>}/>


      </Routes>
    </>
  )
}

export default AppRouter
