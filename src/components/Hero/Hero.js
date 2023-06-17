import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi,this is Swapnanil<br/>
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm an aspiring Software Enginner and App Developer
      </SectionText>
      <Button onClick={()=>window.location = "https://google.com"} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;