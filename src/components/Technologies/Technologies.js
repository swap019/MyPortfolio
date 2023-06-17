import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiCodersrank } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies including Front-end and Backend.
      I'm also a passionate coder who loves problem solving using DSA
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js,Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js,Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCodersrank size='3rem'/>
        <ListContainer>
          <ListTitle>React-Native</ListTitle>
          <ListParagraph>
            Made App Dev projects <br/>
            with React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
