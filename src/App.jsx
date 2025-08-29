import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Work } from './components/Work'
import { Projects } from './components/Projects'

function App() {

  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Education />
      <Work /> */}
      <div>
        
      </div>
      <Projects />
    </div>
  )
}

export default App
