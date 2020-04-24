import React from 'react';
import { Container, Box, Heading, Text } from '@modulz/radix';
import { blogPosts } from '../../utils/blogPosts';
import { FrontMatter } from '../../types';
import { BlogCard } from '../../components/BlogCard';
import { BlogCardGrid } from '../../components/BlogCardGrid';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';

const Blog = () => {
  return (
    <Box mt={6} mb={8}>
      <Container size={1}>
        <TitleAndMetaTags title="Modulz Blog" description="More about what we're doing." />

        <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500 }}>
          Blog
        </Heading>

        <Text as="p" size={7} sx={{ textAlign: 'center', color: 'gray700' }}>
          More about what we're doing.
        </Text>
      </Container>

      <Container size={3} my={8}>
        <BlogCardGrid>
          {blogPosts.map((frontMatter: FrontMatter) => (
            <Box my={4} key={frontMatter.title}>
              <BlogCard frontMatter={frontMatter} />
            </Box>
          ))}
        </BlogCardGrid>
      </Container>
    </Box>
  );
};

export default Blog;
