import React from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Container = styled.div`
	height: 60px;
	${'' /* ${mobile({ height: '50px' })} */}
`

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${'' /* ${mobile({ padding: '10px 0px' })} */}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${'' /* ${mobile({ display: 'none' })} */}
`

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`

const Input = styled.input`
	border: none;
    
	${'' /* ${mobile({ width: '50px' })} */}
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: bold;
	${'' /* ${mobile({ fontSize: '24px' })} */}
`
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${'' /* ${mobile({ flex: 2, justifyContent: 'center' })} */}
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${'' /* display: flex-end; */}
	${'' /* ${mobile({ fontSize: '12px', marginLeft: '10px' })} */}
`

const Navbar = () =>{
    return(
       <Container className="bg-blue-200">
        <Wrapper className="">
			<Left>
				
                <Link to={'/register'}>
					<MenuItem className="hover:text-white"><ExpandMoreIcon /> COURSES</MenuItem>
				</Link>
				<Link to={'/about'}>
					<MenuItem className="hover:text-white">ABOUT</MenuItem>
				</Link>
			</Left>

            <Center>
            <Logo className="font-ari text-[2rem] text-white">TECH <span className="text-[#424294]">SAVVY</span></Logo>
            </Center>

			<Right>
				<Link to={'/'}>
					<MenuItem className="hover:text-white">HOME</MenuItem>
				</Link>
				<Link to={'/register'}>
					<MenuItem className="hover:text-white">SIGNUP</MenuItem>
				</Link>
				<Link to={'/login'}>
					<MenuItem className="hover:text-white">LOGIN</MenuItem>
				</Link>
				
				
				<Link to={'/cart'}>
					<MenuItem className="hover:text-white">
						{/* <Badge badgeContent={quantity} color="primary">
							<ShoppingCartIcon />
						</Badge> */}
					</MenuItem>
				</Link>
			</Right>
		</Wrapper>


       </Container>
    )
}
export default Navbar