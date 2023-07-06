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

export default function Home() {
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
