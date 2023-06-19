import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text1: '250+', text: 'LeetCode problems solved'},
  { text1: '5+', text: 'Projects Completed', },
  { text1: '2.2%', text: 'Rank in JEE', },
  { text1: '1%', text: 'Rank in WBJEE', },
  { text1: '1st', text:"Position in Innovative Idea Proposal by SOCCE" }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.text1}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    </Section>
);

export default Acomplishments;
