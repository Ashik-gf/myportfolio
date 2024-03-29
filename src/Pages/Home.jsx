import React from 'react'
import Banner from '../Components/Banner.jsx/Banner'
import Timeline from '../Components/Timeline/Timeline'
import ProjectViews from '../Components/ProjectView/ProjectViews'
import MyProject from '../Components/MyProject/MyProject'
import HappyClient from '../Components/ProjectView/HappyClicnt/HappyClient'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
<Banner />
<Timeline />
<ProjectViews />
<MyProject />
<HappyClient />
<Contact />
    </div>
  )
}

export default Home