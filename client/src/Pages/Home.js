import React from 'react'
import Header from '../Components/Header'
import Courses from '../Components/Courses'
import Promo from '../Components/Promo'

const Home = () => {
  return (
    <div className='100vh'>
      <Header />
      <Courses />
      <Promo />
    </div>
  )
}

export default Home