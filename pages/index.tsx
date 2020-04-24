import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Heading, Text, Divider, Card, CardLink, Grid, Flex, Link } from '@modulz/radix';
import { learnPosts } from '../utils/learnPosts';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { MarketingButton } from '../components/MarketingButtton';
import { Logo } from '../components/Logo';

const Home = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size={2}>
          <Heading size={5} mb={3} sx={{ textAlign: 'center', fontWeight: 500 }}>
            The No Code DSM
          </Heading>
          <Heading as="h2" px="4" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Define tokens, style components, document your design system and deploy your React library—without writing code.
          </Heading>
          <Flex mt={7} sx={{ justifyContent: 'center' }}>
            <MarketingButton as="a" href="https://modulz.typeform.com/to/fp4gBW" target="_blank">
              Apply for beta access
              <Box as="span" ml={2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.5 3.5L11.5 3.5L11.5 9.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M3.5 11.5L11.5 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Box>
            </MarketingButton>
          </Flex>
          <Flex mt={4} sx={{ justifyContent: 'center' }}>
            <Text size={2} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '1' }}>
              We're currently in private beta.
            </Text>
          </Flex>
        </Container>
      </Box>

      <Container size={3}>
        <Box my={8} pb={8}>
          <img
            src="/home/editor.png"
            style={{
              display: 'block',
              maxWidth: '100%',
              boxShadow:
                'hsla(208, 28%, 12%, 0.42) 0px 60px 123px -25px, hsla(208, 25%, 10%, 0.08) 0px 35px 75px -35px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsl(208, 18%, 86%) hsl(208, 18%, 86%) hsl(210, 16%, 76%)',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Container>

      <Box py={8}>
        <Container size={2}>
          <Text
            as="h3"
            size={2}
            mb={5}
            sx={{ fontWeight: 500, color: 'gray700', letterSpacing: '.125em', textAlign: 'center', textTransform: 'uppercase', lineHeight: '13px', }}
          >
            How it works
          </Text>
          <Heading as="h3" size={4} mb={8} sx={{ textAlign: 'center', fontWeight: 500, lineHeight: '5' }}>
            Design, document and deploy your design system—without writing code.
          </Heading>
        </Container>
        <Container size={2}>
          <Grid sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '5', alignItems: 'center', justifyItems: 'center' }}>
            <Box>
              <NextLink href="/about" passHref>
                <CardLink variant="ghost">
                  <Flex sx={{ alignItems: 'center' }}>
                    <Box mr="4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <rect width="45" height="45" fill="white"/>
                        <circle cx="17.5" cy="17.5" r="16.5" stroke="#ED2D50" stroke-width="2"/>
                        <circle cx="27.5" cy="27.5" r="16.5" stroke="#009E82" stroke-width="2"/>
                      </svg>
                    </Box>
                    <Box>
                      <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                        Design Tokens
                      </Heading>
                    </Box>
                  </Flex>
                  <Text as="p" size={3} ml="8" mt="1" sx={{ lineHeight: '2', color: 'gray700' }}>
                    From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
                  </Text>
                </CardLink>
              </NextLink>
            </Box>
            <Box>
              <NextLink href="/about" passHref>
                <CardLink variant="ghost">
                  <Flex sx={{  }}>
                    <Box mr="5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<circle cx="10.5" cy="10.5" r="9.5" stroke="#ED2D50" stroke-width="2"/>
<rect x="27" y="2" width="17" height="17" stroke="#00974E" stroke-width="2"/>
<path d="M44 43L28.4142 43L44 27.4142L44 43Z" stroke="#00974E" stroke-width="2"/>
<path d="M1 43L1 27.4142L16.5858 43L1 43Z" stroke="#00974E" stroke-width="2"/>
</svg>
                    </Box>
                    <Box>
                      <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                        Component Editor
                      </Heading>
                      <Text as="p" size={3} sx={{ lineHeight: '2', color: 'gray700' }}>
                        From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
                      </Text>
                    </Box>
                  </Flex>
                </CardLink>
              </NextLink>
            </Box>
            <Box>
              <NextLink href="/about" passHref>
                <CardLink variant="ghost">
                  <Flex sx={{  }}>
                    <Box mr="5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<circle cx="17.5" cy="17.5" r="16.5" stroke="#ED2D50" stroke-width="2"/>
<circle cx="27.5" cy="27.5" r="16.5" stroke="#009E82" stroke-width="2"/>
</svg>
                    </Box>
                    <Box>
                      <Heading as="h3" size={1} mb={4} sx={{ fontWeight: 500 }}>
                        Styleguide Editor
                      </Heading>
                      <Text as="p" size={3} sx={{ lineHeight: '2', color: 'gray700' }}>
                        From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
                      </Text>
                    </Box>
                  </Flex>
                </CardLink>
              </NextLink>
            </Box>
            <Box>
              <NextLink href="/about" passHref>
                <CardLink variant="ghost">
                  <Flex sx={{ alignItems: 'center' }}>
                    <Box mr="4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <rect width="45" height="45" fill="white"/>
                        <circle cx="17.5" cy="17.5" r="16.5" stroke="#ED2D50" stroke-width="2"/>
                        <circle cx="27.5" cy="27.5" r="16.5" stroke="#009E82" stroke-width="2"/>
                      </svg>
                    </Box>
                    <Box>
                      <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                        Deploy
                      </Heading>
                    </Box>
                  </Flex>
                  <Text as="p" size={3} ml="8" mt="1" sx={{ lineHeight: '2', color: 'gray700' }}>
                    From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes.
                  </Text>
                </CardLink>
              </NextLink>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box py={8}>
        <Container size={1}>
          <Heading as="h3" size={3} mb={4} sx={{ fontWeight: 500 }}>
            Why Modulz?
          </Heading>
          <Text
            as="p"
            size={4}
            sx={{ lineHeight: '3', }}
          >
            Building a design system is hard. You are faced with several choices—framework, libraries, tooling and architecture. Modulz takes the guess work out of building a design system. You can start building an app today with a high-quality, fully-tested design system.
          </Text>

          <Flex mt={7} sx={{ alignItems: 'center' }}>
            <Box mr={6}>
              <Text
                as="p"
                size={9}
                sx={{ color: 'gray600' }}
                style={{ lineHeight: '1', }}
              >
                01
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                Save time and money
              </Heading>
            </Box>
          </Flex>
          <Text
            as="p"
            size={4}
            mt={2}
            ml={9}
            sx={{ lineHeight: '3', }}
          >
            Radius is a seed project and not a library. It is built with composition in mind. You can replace any component or any part of the stack.
          </Text>

          <Flex mt={6} sx={{ alignItems: 'center' }}>
            <Box mr={6}>
              <Text
                as="p"
                size={9}
                sx={{ color: 'gray600' }}
                style={{ lineHeight: '1', }}
              >
                02
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                Keep everything synced
              </Heading>
            </Box>
          </Flex>
          <Text
            as="p"
            size={4}
            mt={2}
            ml={9}
            sx={{ lineHeight: '3', }}
          >
            Radius is a seed project and not a library. It is built with composition in mind. You can replace any component or any part of the stack.
          </Text>

          <Flex mt={6} sx={{ alignItems: 'center' }}>
            <Box mr={6}>
              <Text
                as="p"
                size={9}
                sx={{ color: 'gray600' }}
                style={{ lineHeight: '1', }}
              >
                03
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                Accessibility
              </Heading>
            </Box>
          </Flex>
          <Text
            as="p"
            size={4}
            mt={2}
            ml={9}
            sx={{ lineHeight: '3', }}
          >
            Radius is a seed project and not a library. It is built with composition in mind. You can replace any component or any part of the stack.
          </Text>

          <Flex mt={6} sx={{ alignItems: 'center' }}>
            <Box mr={6}>
              <Text
                as="p"
                size={9}
                sx={{ color: 'gray600' }}
                style={{ lineHeight: '1', }}
              >
                04
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                Flexibility
              </Heading>
            </Box>
          </Flex>
          <Text
            as="p"
            size={4}
            mt={2}
            ml={9}
            sx={{ lineHeight: '3', }}
          >
            Radius is a seed project and not a library. It is built with composition in mind. You can replace any component or any part of the stack.
          </Text>

          <Flex mt={6} sx={{ alignItems: 'center' }}>
            <Box mr={6}>
              <Text
                as="p"
                size={9}
                sx={{ color: 'gray600' }}
                style={{ lineHeight: '1', }}
              >
                05
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                Remove the guesswork
              </Heading>
            </Box>
          </Flex>
          <Text
            as="p"
            size={4}
            mt={2}
            ml={9}
            sx={{ lineHeight: '3', }}
          >
            Building a design system is hard. You are faced with several choices—framework, libraries, tooling and architecture. Modulz takes the guess work out of building a design system. You can start building an app today with a high-quality, fully-tested design system.
          </Text>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />
      <Box py={9}>
        <Container size={3}>
          <Heading as="h3" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Blog
          </Heading>
          <Text as="p" size={5} mb={7} sx={{ textAlign: 'center', color: 'gray700' }}>
            More about what we're doing.
          </Text>

          <BlogCardGrid>
            {(blogPosts as FrontMatter[]).slice(0, 4).map((frontMatter) => (
              <Box key={frontMatter.title} sx={{ flex: 1 }}>
                <BlogCard frontMatter={frontMatter} />
              </Box>
            ))}
          </BlogCardGrid>

          <Box mt={2}>
            <NextLink href="/blog" passHref>
              <Link>Browse all</Link>
            </NextLink>
          </Box>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <BetaAccess />
    </Box>
  );
};

export default Home;
