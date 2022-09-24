import React, { Fragment } from 'react'
import About from '../components/About/About'
import Chart from '../components/Chart/Chart'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import RecentProject from '../components/RecentProject/RecentProject'
import Services from '../components/Services/Services'
import Team from '../components/Team/Team'
import TopBanner from '../components/TopBanner/TopBanner'
import Video from '../components/Video/Video'

const HomePage = () => {
  return (
    <Fragment>
       <NavigationBar/>
      <TopBanner/>
      <Services/>
      <Chart/>
      <RecentProject/>
      <Video/>
      <Team/>
      <About/>
      {/* <Summary/> */}
      <Footer/>
    </Fragment>
  )
}

export default HomePage
