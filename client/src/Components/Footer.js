import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div`
	display: flex;
	${'' /* background: navy; */}
`
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
	margin: 20px 0px;
`

const SocialContainer = styled.div`
	display: flex;
`

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${'' /* ${mobile({ display: "none" })} */}
`

const Title = styled.h3`
	margin-bottom: 30px;
`

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`

const Right = styled.div`
	flex: flex-end;
	padding: 20px;
	${'' /* ${mobile({ backgroundColor: "#fff8f8" })} */}
`

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	font-size: 18px;
`

const Payment = styled.img`
	width: 50%;
`

const Hr = styled.hr`
	background-color: #eee;
	${'' /* border: none; */}
	height: 4px;
`
// const TikTokIcon = ({ color = "#000000" })

const Footer = () => {
	return (
		<div className="text-white bg-[#232945] px-10 py-4">
			<Container>
				<Left>
					<div>Home</div>
					<div>Parents</div>
					<div>Educators</div>
					<div>Kids</div>
				</Left>
				<Right>
					<div>Support</div>
					<div>FAQS</div>
					<div>My Account</div>
				</Right>
			</Container>
			<Hr />
			<Container>
				<Left className="">© 2023 TechSavvy</Left>
				<Right>
        {/* <div className='flex'> */}

					<svg
						// fill={color}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="8%"
						height="8%"
					>
						<path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
					</svg>
          <FacebookIcon />
          <InstagramIcon />
          <PinterestIcon />
        {/* </div> */}
				</Right>
			</Container>
		</div>
	)
}

export default Footer
