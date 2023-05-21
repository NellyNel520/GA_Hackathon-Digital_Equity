import React from 'react'
import styled from 'styled-components'

const ContainerGrid = styled.div`
  ${'' /* margin: 0 rem; */}
	padding: 2em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 420px);
  grid-gap: 1rem;
  ${'' /* justify-content: center; */}
`
const Card = styled.div`
  max-width: 300px;
  max-height: 320px;
  border-radius: 4px;
  ${'' /* background-color: rgba(147, 145, 140, 0.4); */}
  cursor: pointer;
  transition: all 0.2s;
  ${'' /* color: #f2f2f2; */}
  transition: all 0.2s ease-in-out;
  ${'' /* text-align: center; */}
  /* text-decoration: none; */`


const Courses = () => {
  return (
    <div>
      <h1 className='text-center text-4xl my-6'>COURSES</h1>
      <div className=''>
      <ContainerGrid className="ml-[6rem] mb-4">
        <Card className="border rounded p-3">
          <h1 className='border text-xl rounded
          '>WEB DESIGN</h1>
          <p className='text-center'>
          Explore the world of web design, learning the basics of HTML, CSS, and design principles through interactive lessons, creative projects, and hands-on coding experiences.  </p>
        </Card>
        <Card className="border rounded p-3">
          <h1 className='border text-xl rounded
          '>ENGINEERING</h1>
          <p className='text-center'>A fun online program where kids learn the fundamentals of user experience (UX) research through hands-on activities and interactive lessons. They'll gain valuable skills in gathering insights, conducting user tests, and designing user-friendly experiences. </p>
        </Card>
        <Card className="border rounded p-3">
          <h1 className='border text-xl rounded
          '>CODING</h1>
          <p className='text-center'>An interactive online program where kids develop coding skills through engaging projects, challenges, and step-by-step guidance, fostering computational thinking and problem-solving abilities in a supportive environment. </p>
        </Card>
        <Card className="border rounded p-3">
          <h1 className='border text-xl rounded
          '>HTML</h1>
          <p className='text-center'>Embark on a coding journey to learn HTML, the language that powers the internet. From creating stunning web pages to adding fun elements, like colors and images, unlock the secrets of HTML in a fun and engaging way. </p>
        </Card>
        <Card className="border rounded p-3">
          <h1 className='border text-xl rounded
          '>CSS</h1>
          <p className='text-center'>Learn how to style web pages, add colors, fonts, and exciting effects to make your creations pop! From customizing backgrounds to crafting eye-catching layouts, discover the power of CSS and bring your imagination to life. </p>
        </Card>
        <Card className="border rounded p-3">
          <h1 className='border text-xl rounded
          '>JavaScript</h1>
          <p className='text-center'>Learn the language that brings websites to life and discover how to create dynamic and interactive web experiences. From building games and quizzes to animating characters, JavaScript will be your superpower to make incredible things happen on the web. </p>
        </Card>
        
      </ContainerGrid>
      </div>
    </div>
  )
}

export default Courses