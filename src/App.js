import React from 'react'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'
import Header from 'components/Header/Header'
import Hero from 'components/Hero/Hero'
import About from 'components/About/About'
import Cases from 'components/Cases/Cases'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Cases />
    </>
  )
}
