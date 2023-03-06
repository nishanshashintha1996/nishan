import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import AboutMe from './sections/AboutMe'
import Hero from './sections/Hero'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}
