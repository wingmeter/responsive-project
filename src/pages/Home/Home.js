import React, { useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import InfoSection from '../../components/InfoSection/InfoSection'
import NewNavbar from '../../components/NewNavbar/NewNavbar'
import Sidebar from '../../components/NewNavbar/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NewNavbar toggle={toggle} />
        <HeroSection />
        <InfoSection />
    </>
  )
}

export default Home