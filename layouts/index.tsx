import React from 'react';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { Container, Heading, Text, Box, Flex, Avatar, Link, Divider, TextProps } from '@modulz/radix';
import { FrontMatter } from '../types';
import { authors } from '../data/authors';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { blogPosts } from '../utils/blogPosts';
import { learnPosts } from '../utils/learnPosts';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';

const allPosts = [...blogPosts, ...learnPosts];

export default (frontMatter: FrontMatter) => {
  return ({ children }) => {
    const router = useRouter();

    const articleType = router.pathname.includes('/blog/') ? 'BLOG' : 'LEARN';

    const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontMatter.title}" by @${authors[frontMatter.by].twitter} on @modulz ${
      articleType === 'BLOG' ? 'blog' : 'learning blog'
    }
		.&url=https://modulz.app${router.route}
		`;

    return (
      <React.Fragment>
        <TitleAndMetaTags title={frontMatter.title} description={frontMatter.summary} />

        <Container size={1} mt={6}>
          <Heading size={3} mb={1} sx={{ fontWeight: 500 }}>
            {frontMatter.title}
          </Heading>

          <Flex mt={3} sx={{ alignItems: 'center' }}>
            <Avatar src={authors[frontMatter.by].avatar} mr={2} />
            <Text as="p" size={2} sx={{ display: ['none', 'block'], color: 'gray700', lineHeight: 0 }}>
              {authors[frontMatter.by].name}
            </Text>
            <Separator sx={{ display: ['none', 'block'] }} />
            <Text as="time" size={2} sx={{ color: 'gray700', lineHeight: 0 }}>
              {format(parseISO(frontMatter.publishedAt), 'MMMM ‘yy')}
            </Text>
            <Separator />
            <Text size={2} sx={{ color: 'gray700', lineHeight: 0 }}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>

          <Box my={6}>{children}</Box>

          <Divider size={2} my={8} mx="auto" />

          <Box sx={{ textAlign: 'center' }}>
            <Text as="p" size={3} sx={{ lineHeight: 2 }}>
              Share this post on{' '}
              <Link href={twitterShare} target="_blank" title="Share this post on Twitter">
                Twitter
              </Link>
            </Text>
          </Box>
        </Container>

        {Boolean(frontMatter.relatedIds) && (
          <Container size={2} sx={{ maxWidth: '1090px' }}>
            <Divider size={2} my={8} mx="auto" />
            <Box>
              <Text
                as="h3"
                size={2}
                mb={3}
                weight="medium"
                sx={{
                  textAlign: 'center',
                  color: 'gray700',
                  letterSpacing: '.125em',
                  textTransform: 'uppercase',
                }}
              >
                Related articles
              </Text>

              <BlogCardGrid>
                {allPosts.map((_frontMatter: FrontMatter) => {
                  return frontMatter.relatedIds.includes(_frontMatter.id) ? (
                    <BlogCard key={_frontMatter.id} frontMatter={_frontMatter} />
                  ) : null;
                })}
              </BlogCardGrid>
            </Box>
          </Container>
        )}
      </React.Fragment>
    );
  };
};

function Separator({ sx }: TextProps) {
  return (
    <Text mx={2} sx={{ color: 'gray700', lineHeight: 0, ...sx }} aria-hidden>
      &#xB7;
    </Text>
  );
}
