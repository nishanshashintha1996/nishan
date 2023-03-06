import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import AboutMe from './sections/AboutMe'
import Hero from './sections/Hero'
import MyWorks from './sections/MyWorks'
import Reviews from './sections/Reviews'
import './Home.css'
import ContactMe from './sections/ContactMe'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <MyWorks/>
      <Reviews/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}
