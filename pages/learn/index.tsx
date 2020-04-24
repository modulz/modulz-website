import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';
import { learnPosts } from '../../utils/learnPosts';
import { FrontMatter } from '../../types';
import { BlogCard } from '../../components/BlogCard';
import { BlogCardGrid } from '../../components/BlogCardGrid';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Learn = () => {
  return (
    <Box mt={6} mb={8}>
      <Container size={2}>
        <TitleAndMetaTags title="Modulz Learn" description="Find the tutorials you need." />

        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Learn
        </Heading>

        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          Content to help with onboarding, education and best practices.
        </Text>
      </Container>

      <Container size={3} my={8}>
        <BlogCardGrid>
          {learnPosts.map((frontMatter: FrontMatter) => (
            <Box my={4} key={frontMatter.title}>
              <BlogCard frontMatter={frontMatter} />
            </Box>
          ))}
        </BlogCardGrid>
      </Container>
    </Box>
  );
};

export default Learn;
