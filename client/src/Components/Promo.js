import React from 'react'
import styled from 'styled-components'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Container = styled.div`
	width: 100vw;
	${'' /* height: 100vh; */}
	display: flex;
	position: relative;
	overflow: hidden;
	${'' /* background-image: url{'src/assets/MaskGroup.png'} */}
	${'' /* ${mobile({ display: "none" })} */}
`
const Icon = styled.div`
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`

const Promo = () => {
	return (
		<div className="bg-[#cbf1f2]">
			<h1 className="text-center text-2xl pt-[2rem]">
				Why Should Kids and Teens Learn Tech with
			</h1>
			<h1 className="text-center text-3xl bold">
				<span className="text-orange-500">TECH</span>SAVVY
			</h1>

			<div className="flex ml-[15%] pb-6">
				<div className="w-[30%] mr-[7rem]">
					<Icon>
						<TipsAndUpdatesOutlinedIcon className="text-blue-300" sx={{ fontSize: '75px' }} />
					</Icon>
					<h1 className="text-2xl text-orange-500">Free Education</h1>
					<p>
						We offer completely free education in the field of technology,
						ensuring that knowledge is accessible to all aspiring learners.
					</p>
				</div>

        <div className="w-[30%] mr-[7rem]">
					<Icon>
						<LaptopMacOutlinedIcon className="text-blue-300" sx={{ fontSize: '75px' }} />
					</Icon>
					<h1 className="text-2xl text-orange-500">Online Learning</h1>
					<p>
					Our courses are delivered through a convenient online platform, allowing learners to access educational materials and engage in interactive lessons from anywhere, at any time.
					</p>
				</div>

        <div className="w-[30%] mr-[5rem]">
					<Icon>
						<EmojiEventsOutlinedIcon className="text-blue-300" sx={{ fontSize: '75px' }} />
					</Icon>
					<h1 className="text-2xl text-orange-500">Engaging Content</h1>
					<p>
          We believe in making learning enjoyable and engaging. Our courses are designed to be interactive, incorporating practical examples, hands-on exercises, and multimedia elements to enhance the learning experience.
					</p>
				</div>

				
			</div>
		</div>
	)
}

export default Promo
