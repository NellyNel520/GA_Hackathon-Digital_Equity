import React from 'react'
import styled from 'styled-components'
import MaskGroup from '../assets/MaskGroup.png'

const Container = styled.div`
	width: 100vw;
	${'' /* height: 100vh; */}
	display: flex;
	position: relative;
	overflow: hidden;
	${'' /* background-image: url{'src/assets/MaskGroup.png'} */}
	${'' /* ${mobile({ display: "none" })} */}
`

const Header = () => {
	return (
		<div>
			<Container className="bg-blue-300">
				<div className="flex">
					<div className="w-[45%] mt-[6rem] m-6 ml-[5rem]">
						<h1 className='text-[2.5rem] text-white font-bold mb-2'>Teach E-Learning: Empowering Young Innovators for the Future!</h1>
						<p className='mb-3'>
							Discover the thrilling world of technology with Engaging
							E-Learning Courses Designed just for kids
						</p>
            <div>
            <button className='border rounded bg-[#3a69bb] py-2 px-4 text-white'>Get Started</button>
          </div>
					</div>

					<div>
						<img src={MaskGroup} alt="ll" />
					</div>
          
				</div>
			</Container>
		</div>
	)
}

export default Header
