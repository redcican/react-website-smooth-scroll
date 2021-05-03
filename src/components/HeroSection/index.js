import React, {useState }from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import {Button} from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new version account today and receive $200 in credit
          towards your next payments.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="singup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true" dark="true" >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
