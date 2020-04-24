import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Grid, Heading, Button, Text, Divider, Flex, Link } from '@modulz/radix';
import { learnPosts } from '../utils/learnPosts';
import { blogPosts } from '../utils/blogPosts';
import { FrontMatter } from '../types';
import { BlogCard } from '../components/BlogCard';
import { BlogCardGrid } from '../components/BlogCardGrid';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Styleguide = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Box mt={6} mb={8}>
        <Container size={2}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center' }}>
            The fastest way to create a styleguide
          </Heading>

          <Heading as="h2" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            Keep your team in sync with a styleguide automatically generated from your design system.
          </Heading>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />
      <Box py={9}>
        <Container size={3}>
          <Text
            as="h3"
            size={2}
            mb={3}
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              color: 'gray700',
              letterSpacing: '.125em',
              textTransform: 'uppercase',
            }}
          >
            Features
          </Text>
          <Heading as="h3" size={4} mb={3} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            A fully-featured styleguide. Out of the box.
          </Heading>
          <Text
            as="p"
            size={5}
            sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}
          >
            Zero set-up. Just hit "publish", we'll handle the rest.
          </Text>

          <Flex mt={8} sx={{ alignItems: 'center' }}>
            <Box mr={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
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
            <Box ml={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500, letterSpacing: '-.028em' }}>
                Live code editor
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3', letterSpacing: '-.008em' }}>
                This is going to be a bit of a thought dump, I'm not sure any of it blocks the registration itself, but
                I think it brings up a lot of questions.
              </Text>
            </Box>
          </Flex>

          <Flex mt={8} sx={{ alignItems: 'center' }}>
            <Box mr={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
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
            <Box ml={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500, letterSpacing: '-.042em' }}>
                Props table
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3', letterSpacing: '-.008em' }}>
                This is going to be a bit of a thought dump, I'm not sure any of it blocks the registration itself, but
                I think it brings up a lot of questions.
              </Text>
            </Box>
          </Flex>

          <Flex mt={8} sx={{ alignItems: 'center' }}>
            <Box mr={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
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
            <Box ml={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500, letterSpacing: '-.042em' }}>
                Rich-text editing
              </Heading>
              <Text as="p" size={4} sx={{ lineHeight: '3', letterSpacing: '-.008em' }}>
                This is going to be a bit of a thought dump, I'm not sure any of it blocks the registration itself, but
                I think it brings up a lot of questions.
              </Text>
            </Box>
          </Flex>

          <Flex mt={8} sx={{ alignItems: 'center' }}>
            <Box mr={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
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
            <Box ml={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
              <Heading as="h3" size={3} mb={3} sx={{ fontWeight: 500, letterSpacing: '-.042em' }}>
                Pre-built blocks
              </Heading>
              <Text as="p" size={5} sx={{ lineHeight: '3', letterSpacing: '-.008em' }}>
                Use predefined templates to design a flexible structure for your styleguide content.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={9} sx={{ backgroundColor: 'hsl(210,25%,97%)' }}>
        <Container size={2} sx={{ maxWidth: '1090px' }}>
          <Flex sx={{ alignItems: 'center' }}>
            <Box mr={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
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
            <Box ml={6} sx={{ flexBasis: 0, flexGrow: 1 }}>
              <Text
                as="h3"
                size={2}
                mb={3}
                sx={{ fontWeight: 500, color: 'gray700', letterSpacing: '.125em', textTransform: 'uppercase' }}
              >
                Versioning
              </Text>
              <Heading as="h3" size={4} mb={3} sx={{ fontWeight: 500, letterSpacing: '-.042em' }}>
                Advanced versioning so you stay in control
              </Heading>
              <Text as="p" size={5} mb={6} sx={{ color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}>
                Keep your whole team synced on your design system's progress.
              </Text>
              <Box mb={6}>
                <Heading as="h6" size={1} mb={1} sx={{ fontWeight: 500 }}>
                  Release notes
                </Heading>
                <Text as="p" size={3} sx={{ lineHeight: '2', color: 'gray700' }}>
                  Leave detailed release notes to inform teammates about insertions, deletions and updates.
                </Text>
              </Box>
              <Box mb={6}>
                <Heading as="h6" size={1} mb={1} sx={{ fontWeight: 500 }}>
                  Rollbacks
                </Heading>
                <Text as="p" size={3} sx={{ lineHeight: '2', color: 'gray700' }}>
                  In case of an emergency, you can restore your design system to a previous version.
                </Text>
              </Box>
              <Box mb={6}>
                <Heading as="h6" size={1} mb={1} sx={{ fontWeight: 500 }}>
                  Version types
                </Heading>
                <Text as="p" size={3} sx={{ lineHeight: '2', color: 'gray700' }}>
                  Track changes to your design system. See who is working on which components and when.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={9}>
        <Container size={2} sx={{ maxWidth: '690px' }}>
          <Text
            as="h3"
            size={2}
            mb={3}
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              color: 'gray700',
              letterSpacing: '.125em',
              textTransform: 'uppercase',
            }}
          >
            Features
          </Text>
          <Heading as="h3" size={4} mb={3} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.042em' }}>
            Feature overview
          </Heading>
          <Text
            as="p"
            size={5}
            sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3', letterSpacing: '-.008em' }}
          >
            Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
          </Text>
        </Container>
        <Container size={2} mt={7} sx={{ maxWidth: '1090px' }}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
              gap: 7,
            }}
          >
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path
                      d="M27.5 9.5V18.5H17.5V9.5C17.5 6.73858 19.7386 4.5 22.5 4.5C25.2614 4.5 27.5 6.73858 27.5 9.5Z"
                      stroke="#0057FF"
                    ></path>
                    <circle cx="22.5" cy="28.5" r="12" fill="white" stroke="#0057FF"></circle>
                    <path
                      d="M21.5 27.5C21.5 27.5 21.5 27.3 21.5 26.5C21.5 25.7 22.1667 25.5 22.5 25.5C22.8333 25.5 23.5 25.7 23.5 26.5V27.5"
                      stroke="#0057FF"
                    ></path>
                    <path d="M22.5 20.5V22.5" stroke="#66B8FF" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M22.5 34.5V36.5" stroke="#66B8FF" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16.5 28.5H14.5" stroke="#66B8FF" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M18.8536 32.8536C19.0488 32.6583 19.0488 32.3417 18.8536 32.1464C18.6583 31.9512 18.3417 31.9512 18.1464 32.1464L18.8536 32.8536ZM18.1464 32.1464L16.6464 33.6464L17.3536 34.3536L18.8536 32.8536L18.1464 32.1464Z"
                      fill="#66B8FF"
                    ></path>
                    <path d="M30.5 28.5H28.5" stroke="#66B8FF" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M26.1464 24.1464C25.9512 24.3417 25.9512 24.6583 26.1464 24.8536C26.3417 25.0488 26.6583 25.0488 26.8536 24.8536L26.1464 24.1464ZM27.6464 22.6464L26.1464 24.1464L26.8536 24.8536L28.3536 23.3536L27.6464 22.6464Z"
                      fill="#66B8FF"
                    ></path>
                    <path
                      d="M18.1464 24.8536C18.3417 25.0488 18.6583 25.0488 18.8536 24.8536C19.0488 24.6583 19.0488 24.3417 18.8536 24.1464L18.1464 24.8536ZM16.6464 23.3536L18.1464 24.8536L18.8536 24.1464L17.3536 22.6464L16.6464 23.3536Z"
                      fill="#66B8FF"
                    ></path>
                    <path
                      d="M26.8536 32.1464C26.6583 31.9512 26.3417 31.9512 26.1464 32.1464C25.9512 32.3417 25.9512 32.6583 26.1464 32.8536L26.8536 32.1464ZM28.3536 33.6464L26.8536 32.1464L26.1464 32.8536L27.6464 34.3536L28.3536 33.6464Z"
                      fill="#66B8FF"
                    ></path>
                    <circle cx="22.5" cy="28.5" r="8" stroke="#66B8FF"></circle>
                    <circle cx="22.5" cy="29.5" r="2" stroke="#0057FF"></circle>
                    <rect x="22" y="27" width="1" height="2" fill="white"></rect>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Password protection
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Set a password to keep your styleguide private.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M4.5 22.5H40.5" stroke="#0057FF"></path>
                    <path d="M22.5 4.5V40.5" stroke="#0057FF"></path>
                    <path
                      d="M6 29.5C15.375 33.5 29.625 33.5 39 29.5"
                      stroke="#66B8FF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6 15.5C15.6429 11.5 29.3571 11.5 39 15.5"
                      stroke="#66B8FF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22.5 40.5C9.16669 35.0312 9.16666 9.96875 22.5 4.5"
                      stroke="#66B8FF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22.5 40.5C35.8333 35.1875 35.8332 9.8125 22.5 4.5"
                      stroke="#66B8FF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <circle cx="22.5" cy="22.5" r="18" stroke="#0057FF"></circle>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Custom domain
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Add a professional touch to your styleguide with a custom domain.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path
                      d="M30.5 17.5V14.8837C30.5 14.6367 30.4086 14.3984 30.2433 14.2148L21.7979 4.83104C21.6083 4.62032 21.3381 4.5 21.0546 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V39.5C4.5 40.0523 4.94772 40.5 5.5 40.5H22.5"
                      stroke="#0057FF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path d="M9.5 19.5H21.5" stroke="#66B8FF" stroke-linecap="round"></path>
                    <path d="M9.5 24.5H14.5" stroke="#66B8FF" stroke-linecap="round"></path>
                    <path d="M9.5 29.5H16.5" stroke="#66B8FF" stroke-linecap="round"></path>
                    <path d="M9.5 34.5H17.5" stroke="#66B8FF" stroke-linecap="round"></path>
                    <path d="M9.5 9.5H16.5" stroke="#66B8FF" stroke-linecap="round"></path>
                    <path d="M9.5 14.5H13.5" stroke="#66B8FF" stroke-linecap="round"></path>
                    <path d="M21.5 5V14.5H30" stroke="#0057FF" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M33.5 33.5L30.5 30.5V25.5"
                      stroke="#0057FF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M40.5 30.5C40.5 36.0229 36.0229 40.5 30.5 40.5C24.9771 40.5 20.5 36.0229 20.5 30.5C20.5 24.9771 24.9771 20.5 30.5 20.5C36.0229 20.5 40.5 24.9771 40.5 30.5Z"
                      stroke="#0057FF"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Change log
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Track every version of your design system.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M12.5 12.5V38.5" stroke="#0029FF"></path>
                    <path d="M28 9.5H36" stroke="#66B8FF"></path>
                    <path d="M9 9.5H12" stroke="#66B8FF"></path>
                    <path d="M14 9.5H17" stroke="#66B8FF"></path>
                    <path d="M18 17.5H33" stroke="#66B8FF"></path>
                    <path d="M18 21.5H26" stroke="#66B8FF"></path>
                    <path d="M18 25.5H33" stroke="#66B8FF"></path>
                    <path d="M18 29.5H26" stroke="#66B8FF"></path>
                    <path d="M18 33.5H33" stroke="#66B8FF"></path>
                    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF"></rect>
                    <path d="M6.5 12.5H38.5" stroke="#0029FF"></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Pre-built blocks
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Use predefined templates to design a flexible structure for your styleguide content.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M12.5 12.5V38.5" stroke="#0029FF"></path>
                    <path d="M28 9.5H36" stroke="#66B8FF"></path>
                    <path d="M9 9.5H12" stroke="#66B8FF"></path>
                    <path d="M14 9.5H17" stroke="#66B8FF"></path>
                    <path d="M18 17.5H33" stroke="#66B8FF"></path>
                    <path d="M18 21.5H26" stroke="#66B8FF"></path>
                    <path d="M18 25.5H33" stroke="#66B8FF"></path>
                    <path d="M18 29.5H26" stroke="#66B8FF"></path>
                    <path d="M18 33.5H33" stroke="#66B8FF"></path>
                    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF"></rect>
                    <path d="M6.5 12.5H38.5" stroke="#0029FF"></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Props table
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Use predefined templates to design a flexible structure for your styleguide content.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M12.5 12.5V38.5" stroke="#0029FF"></path>
                    <path d="M28 9.5H36" stroke="#66B8FF"></path>
                    <path d="M9 9.5H12" stroke="#66B8FF"></path>
                    <path d="M14 9.5H17" stroke="#66B8FF"></path>
                    <path d="M18 17.5H33" stroke="#66B8FF"></path>
                    <path d="M18 21.5H26" stroke="#66B8FF"></path>
                    <path d="M18 25.5H33" stroke="#66B8FF"></path>
                    <path d="M18 29.5H26" stroke="#66B8FF"></path>
                    <path d="M18 33.5H33" stroke="#66B8FF"></path>
                    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF"></rect>
                    <path d="M6.5 12.5H38.5" stroke="#0029FF"></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Rich-text editing
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Use predefined templates to design a flexible structure for your styleguide content.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M12.5 12.5V38.5" stroke="#0029FF"></path>
                    <path d="M28 9.5H36" stroke="#66B8FF"></path>
                    <path d="M9 9.5H12" stroke="#66B8FF"></path>
                    <path d="M14 9.5H17" stroke="#66B8FF"></path>
                    <path d="M18 17.5H33" stroke="#66B8FF"></path>
                    <path d="M18 21.5H26" stroke="#66B8FF"></path>
                    <path d="M18 25.5H33" stroke="#66B8FF"></path>
                    <path d="M18 29.5H26" stroke="#66B8FF"></path>
                    <path d="M18 33.5H33" stroke="#66B8FF"></path>
                    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF"></rect>
                    <path d="M6.5 12.5H38.5" stroke="#0029FF"></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Search
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Use predefined templates to design a flexible structure for your styleguide content.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M12.5 12.5V38.5" stroke="#0029FF"></path>
                    <path d="M28 9.5H36" stroke="#66B8FF"></path>
                    <path d="M9 9.5H12" stroke="#66B8FF"></path>
                    <path d="M14 9.5H17" stroke="#66B8FF"></path>
                    <path d="M18 17.5H33" stroke="#66B8FF"></path>
                    <path d="M18 21.5H26" stroke="#66B8FF"></path>
                    <path d="M18 25.5H33" stroke="#66B8FF"></path>
                    <path d="M18 29.5H26" stroke="#66B8FF"></path>
                    <path d="M18 33.5H33" stroke="#66B8FF"></path>
                    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF"></rect>
                    <path d="M6.5 12.5H38.5" stroke="#0029FF"></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Change log
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Use predefined templates to design a flexible structure for your styleguide content.
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex sx={{ alignItems: 'center' }}>
                <Box mr={4}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path d="M12.5 12.5V38.5" stroke="#0029FF"></path>
                    <path d="M28 9.5H36" stroke="#66B8FF"></path>
                    <path d="M9 9.5H12" stroke="#66B8FF"></path>
                    <path d="M14 9.5H17" stroke="#66B8FF"></path>
                    <path d="M18 17.5H33" stroke="#66B8FF"></path>
                    <path d="M18 21.5H26" stroke="#66B8FF"></path>
                    <path d="M18 25.5H33" stroke="#66B8FF"></path>
                    <path d="M18 29.5H26" stroke="#66B8FF"></path>
                    <path d="M18 33.5H33" stroke="#66B8FF"></path>
                    <rect x="6.5" y="6.5" width="32" height="32" rx="1.5" stroke="#0029FF"></rect>
                    <path d="M6.5 12.5H38.5" stroke="#0029FF"></path>
                  </svg>
                </Box>
                <Box>
                  <Heading as="h3" size={1} sx={{ fontWeight: 500 }}>
                    Live code editor
                  </Heading>
                </Box>
              </Flex>
              <Box pt={1} pl={8}>
                <Text as="p" size={4} sx={{ color: 'gray700', lineHeight: '3' }}>
                  Use predefined templates to design a flexible structure for your styleguide content.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />
      <BetaAccess />
    </Box>
  );
};

export default Styleguide;
