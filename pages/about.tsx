import React from 'react';
import { Container, Box, Heading, Button, Text, Divider, Flex } from '@modulz/radix';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Pricing = () => {
  return (
    <Box>
      <TitleAndMetaTags title="About" />

      <Box mt={6} mb={8}>
        <Container size={1}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center' }}>
            About
          </Heading>

          <Heading as="h2" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Our mission is to fix the disconnect between digital product teams.
          </Heading>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Pricing;
