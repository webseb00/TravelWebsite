import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Video from '../assets/videos/video1.mp4';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInLine />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>
            Unreal Destinations
          </HeroH1>
          <HeroP>
            Out of this World!
          </HeroP>
          <Button
            primary="true"
            big="true"
            round="true"
            to="/trips4"
          >
            Travel Now!
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
};

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -80px;
  padding: 0 1rem;
  position: relative;
  color: #fff;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(100deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.6) 100%),
    linear-gradient(100deg, rgba(0,0,0,.2) 0%, transparent 100%)
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;

`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  color: #fff;
  padding: 0;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`

export default Hero;