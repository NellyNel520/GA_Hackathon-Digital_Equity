import React from 'react'
import styled from 'styled-components'
import MaskGroup from '../../public/assets/MaskGroup.png'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
  background-image: url("../../public/assets/MaskGroup.png") 
	${'' /* ${mobile({ display: "none" })} */}
`

const Header = () => {
  return (
    <div>
    <Container >Header</Container>
    </div>
  )
}

export default Header