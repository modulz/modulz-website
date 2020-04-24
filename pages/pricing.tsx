import React from 'react';
import { Container, Box, Heading, Grid, Card, Button, Text, Divider, Flex } from '@modulz/radix';
import { MarketingButton } from '../components/MarketingButtton';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Pricing = () => {
  return (
    <Box>
      <TitleAndMetaTags title="Pricing" />

      <Box mt={6}>
        <Container size={1}>
          <Heading as="h5" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Pricing
          </Heading>
          <Text as="p" size={5} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3' }}>
            Start building your design system for free.
          </Text>
        </Container>
      </Box>

      <Box pt={9}>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
              gap: 5,
            }}
          >
            <Card>
              <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Text
                    size={5}
                    mb="2"
                    sx={{ textAlign: 'center', display: 'block', color: 'gray700' }}
                    style={{ lineHeight: '1' }}
                  >
                    Starter
                  </Text>
                  <Heading
                    size={4}
                    mt="4"
                    mb="5"
                    weight="medium"
                    sx={{ textAlign: 'center', display: 'block' }}
                    style={{ lineHeight: '1' }}
                  >
                    Free
                  </Heading>
                  <Flex mb="3" sx={{ alignItems: 'center' }}>
                    <Box mr="1">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Box>
                    <Text size={3} sx={{ lineHeight: '1' }}>
                      Up to 2 editors
                    </Text>
                  </Flex>
                  <Flex mb="3" sx={{ alignItems: 'center' }}>
                    <Box mr="1">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Box>
                    <Text size={3} sx={{ lineHeight: '1' }}>
                      Basic component library
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <MarketingButton
                    as="a"
                    href="https://modulz.typeform.com/to/fp4gBW"
                    mt="2"
                    sx={{ width: '100%', justifyContent: 'center', color: 'gray600' }}
                  >
                    Start for free
                  </MarketingButton>
                </Box>
              </Flex>
            </Card>

            <Card>
              <Text
                size={5}
                mb="2"
                sx={{ textAlign: 'center', display: 'block', color: 'blue600' }}
                style={{ lineHeight: '1' }}
              >
                Pro
              </Text>
              <Box sx={{ position: 'relative' }}>
                <Heading size={4} mt="4" mb="5" weight="medium" sx={{ textAlign: 'center', display: 'block' }} style={{ lineHeight: '1' }}>
                  $199
                </Heading>
                <Box sx={{ position: 'absolute', width: '100%', bottom: '-25px' }}>
                  <Text size={2} mb="1" sx={{ textAlign: 'center', display: 'block', color: 'gray700' }} style={{ lineHeight: '1' }}>
                    per design system/month
                  </Text>
                </Box>
              </Box>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Up to 5 editors
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Full component library
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Remove Modulz branding
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Custom subdomain
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Private styleguide
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Version history
                </Text>
              </Flex>
              <MarketingButton
                as="a"
                href="https://modulz.typeform.com/to/fp4gBW"
                mt="2"
                sx={{ width: '100%', justifyContent: 'center' }}
              >
                Get started
              </MarketingButton>
            </Card>

            <Card>
              <Text
                size={5}
                mb="2"
                sx={{ textAlign: 'center', display: 'block', color: 'gray900' }}
                style={{ lineHeight: '1' }}
              >
                Organisation
              </Text>
              <Box sx={{ position: 'relative' }}>
                <Heading
                  size={4}
                  mt="4"
                  mb="5"
                  weight="medium"
                  sx={{ textAlign: 'center', display: 'block' }}
                  style={{ lineHeight: '1' }}
                >
                  $99
                </Heading>
                <Box sx={{ position: 'absolute', width: '100%', bottom: '-25px' }}>
                  <Text
                    size={2}
                    mb="1"
                    sx={{ textAlign: 'center', display: 'block', color: 'gray700' }}
                    style={{ lineHeight: '1' }}
                  >
                    per editor/month
                  </Text>
                </Box>
              </Box>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Unlimited editors
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Full component library
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Remove Modulz branding
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Custom Domain
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  Centralized Systems
                </Text>
              </Flex>
              <Flex mb="3" sx={{ alignItems: 'center' }}>
                <Box mr="1">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                <Text size={3} sx={{ lineHeight: '1' }}>
                  SSO
                </Text>
              </Flex>
              <MarketingButton
                as="a"
                href="https://modulz.typeform.com/to/fp4gBW"
                mt="2"
                sx={{ width: '100%', justifyContent: 'center' }}
                style={{ color: 'black' }}
              >
                Get started
              </MarketingButton>
            </Card>
          </Grid>
        </Container>

        <Container size={2}>
          <Box py="9">
            <Grid
              sx={{
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                rowGap: '1px',
                columnGap: 5,
              }}
            >
              <Box sx={{ alignSelf: 'center' }}>
                <Heading size={2} weight="medium" style={{ lineHeight: '1' }}>
                  Features
                </Heading>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text
                  size={4}
                  sx={{ textAlign: 'center', display: 'block', color: 'gray700' }}
                  style={{ lineHeight: '1' }}
                >
                  Starter
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text
                  size={4}
                  sx={{ textAlign: 'center', display: 'block', color: 'blue600' }}
                  style={{ lineHeight: '1' }}
                >
                  Pro
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center' }}>
                <Text
                  size={4}
                  sx={{ textAlign: 'center', display: 'block', color: 'gray900' }}
                  style={{ lineHeight: '1' }}
                >
                  Organisation
                </Text>
              </Box>

              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'white', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'white', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'white', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  General
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Editors
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}>
                <Text
                  size={3}
                  sx={{ display: 'block', textAlign: 'center', alignSelf: 'center' }}
                  style={{ lineHeight: '34px' }}
                >
                  2
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}>
                <Text
                  size={3}
                  sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }}
                  style={{ lineHeight: '34px' }}
                >
                  5
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}>
                <Text
                  size={3}
                  sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }}
                  style={{ lineHeight: '34px' }}
                >
                  Unlimited
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Component Library
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}>
                <Text
                  size={3}
                  sx={{ display: 'block', textAlign: 'center', alignSelf: 'center' }}
                  style={{ lineHeight: '34px' }}
                >
                  Basic
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}>
                <Text
                  size={3}
                  sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }}
                  style={{ lineHeight: '34px' }}
                >
                  Complete
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}>
                <Text
                  size={3}
                  sx={{ display: 'block', textAlign: 'center', alignSelf: 'center', color: 'white' }}
                  style={{ lineHeight: '34px' }}
                >
                  Complete
                </Text>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Cross Platform
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Component Editor
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Design Tokens
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Design Linting
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Integrations
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z" fill="currentColor"/>
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Rollbacks
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>

              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  Styleguide
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom pages
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Rich-text Editing
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom Sections
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Password protection
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  White-labelling
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Version History
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom Subdomain
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Custom Domain
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Commenting
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Search
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Version Control
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>

              <Box sx={{ height: '100%' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center' }}>
                <Text size={4} weight="medium" sx={{ lineHeight: '1' }}>
                  Security
                </Text>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray900', height: '6' }}></Box>

              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Two-factor Authentication
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray200' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  User Permissions
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'blue600', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Centralized Design Systems
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Centralized Billing
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Invoicing Options
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Domain-Restricted Invites
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Content Ownership
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
              <Box sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'space-between', color: 'gray600' }}>
                <Text size={3} style={{ lineHeight: '1' }}>
                  Single Sign-On
                </Text>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.877041 7.49972C0.877041 3.84204 3.84219 0.876892 7.49987 0.876892C11.1575 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1575 14.1226 7.49987 14.1226C3.84219 14.1226 0.877041 11.1574 0.877041 7.49972ZM7.49987 1.82689C4.36686 1.82689 1.82704 4.36671 1.82704 7.49972C1.82704 10.6327 4.36686 13.1726 7.49987 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49987 1.82689ZM8.24989 10.5C8.24989 10.9142 7.91411 11.25 7.49989 11.25C7.08568 11.25 6.74989 10.9142 6.74989 10.5C6.74989 10.0858 7.08568 9.75 7.49989 9.75C7.91411 9.75 8.24989 10.0858 8.24989 10.5ZM6.05 6.25C6.05 5.57211 6.63507 4.925 7.5 4.925C8.36493 4.925 8.95 5.57211 8.95 6.25C8.95 6.74118 8.67999 6.99212 8.21444 7.27494C8.16247 7.30651 8.10255 7.34131 8.03844 7.37854L8.03838 7.37858C7.85518 7.48497 7.63784 7.61119 7.47446 7.73849C7.23211 7.92732 6.95 8.23198 6.95 8.7C6.95 9.00376 7.19624 9.25 7.5 9.25C7.80237 9.25 8.04774 9.00601 8.04998 8.70417L8.05053 8.7033C8.05921 8.6896 8.0849 8.65735 8.15054 8.6062C8.25204 8.52712 8.36505 8.46163 8.51563 8.37436L8.51568 8.37433C8.59419 8.32883 8.68292 8.27741 8.78556 8.21506C9.32001 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93507 3.825 7.5 3.825C6.06493 3.825 4.95 4.92789 4.95 6.25C4.95 6.55376 5.19624 6.8 5.5 6.8C5.80376 6.8 6.05 6.55376 6.05 6.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'gray200', height: '6' }}></Box>
              <Box sx={{ justifyContent: 'center', backgroundColor: 'blue600', height: '6' }}></Box>
              <Box>
                <Flex py="1" sx={{ justifyContent: 'center', backgroundColor: 'gray900', color: 'white' }}>
                  <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                      fill="currentColor"
                    />
                  </svg>
                </Flex>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Divider mx="auto" size={2} />

      <Box py={9}>
        <Container size={1} mb="8">
          <Heading as="h5" size={4} mb={2} sx={{ textAlign: 'center', fontWeight: 500 }}>
            Frequently asked questions
          </Heading>
          <Text as="p" size={5} sx={{ textAlign: 'center', color: 'gray700', lineHeight: '3' }}>
            Start building your design system for free.
          </Text>
        </Container>
        <Container size={2}>
          <Grid
            sx={{
              gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
              gap: 7,
            }}
          >
            <Box>
              <Heading as="h5" size={1} mb={2} sx={{ fontWeight: 500 }}>
                Start building your design system for free.
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Start building your design system for free.
              </Text>
            </Box>
            <Box>
              <Heading as="h5" size={1} mb={2} sx={{ fontWeight: 500 }}>
                Can I manage admin permissions?
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Start building your design system for free.
              </Text>
            </Box>
            <Box>
              <Heading as="h5" size={1} mb={2} sx={{ fontWeight: 500 }}>
                Can I receive invoices?
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Start building your design system for free.
              </Text>
            </Box>
            <Box>
              <Heading as="h5" size={1} mb={2} sx={{ fontWeight: 500 }}>
                Who is responsible for billing?
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Any admin can upgrade a design system to the Pro plan. Only admins can access Billing Settings and
                manage payments for the design system.
              </Text>
            </Box>
            <Box>
              <Heading as="h5" size={1} mb={2} sx={{ fontWeight: 500 }}>
                How can I downgrade my plan?
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Start building your design system for free.
              </Text>
            </Box>
            <Box>
              <Heading as="h5" size={1} mb={2} sx={{ fontWeight: 500 }}>
                Are discounts available for open-source?
              </Heading>
              <Text as="p" size={3} sx={{ lineHeight: '2' }}>
                Start building your design system for free.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;
