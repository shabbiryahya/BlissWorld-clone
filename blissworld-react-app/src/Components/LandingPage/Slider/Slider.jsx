import React from 'react';
import '../Slider/Slider.css';
import styled from 'styled-components';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Container = styled.div`
  width: 100;
  height: 100vh;
  display: flex;
  ${'' /* background-color: rgb(194, 230, 240); */}
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  
  
  top: 0;
  bottom: 0;
  left:10px
  align-items: center;
  justify-content: center;
  position: absolute;
left:${(props) => props.direction === 'left' && '10px'} ;
right:${(props) => props.direction === 'right' && '10px'} ;

  margin: auto;
  cursor:pointer;
  opacity:0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-family: 'Allerta Stencil', sans-serif;
`;
const Description = styled.p`
  font-family: 'Arvo', serif;
`;
const Button = styled.button``;

// const anchor = styled.a``;

// const anchordiv = styled.div``;

function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <KeyboardDoubleArrowLeftIcon />
      </Arrow>

      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image
              src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/hp-banner.gif?t=1669089944&_gl=1*1uc6apn*_ga*MTIzNjY1NjYwNy4xNjUyMTM3Njc4*_ga_WS2VZYPC6G*MTY2OTA4OTUzNi42MDguMS4xNjY5MDkwMDkyLjQ3LjAuMA."
              alt="img1"
            />
          </ImageContainer>

          <InfoContainer>
            <Title>Shop Our Holiday</Title>
            <Description>
              Stock up on glow-giving skincare for everyone on your list. So
              Many Blissful Gifts To Give.
            </Description>
            <Button id="neonShadow">SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <KeyboardDoubleArrowRightIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
