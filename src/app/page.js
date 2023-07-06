"use client"
import { useContext, useEffect } from 'react'
import Careers from './components/Careers'
import Companies from './components/Companies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import OurServices from './components/OurServices'
import SuccessStories from './components/SuccessStories'
import Technologies from './components/Technologies'
import WhatWeDo from './components/WhatWeDo'
import AppContext from './context/store'

export default function Home() {
  const {id, setId} = useContext(AppContext)

  const handleScroll = () => {
    setId('')
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
    <Navbar />
    <Intro />
    <OurServices />
    <Technologies />
    <WhatWeDo />
    <Companies />
    <SuccessStories />
    <Careers />
    <Contact />
    <Footer />
    </>
  )
}
