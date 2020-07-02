import React from 'react';
import { Container, Box, Link, Grid, Badge, CardLink, Heading, Button, Text, Divider, Flex } from '@modulz/radix';
import { BetaAccess } from '../components/BetaAccess';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const Primitives = () => {
  return (
    <Box>
      <TitleAndMetaTags
        title="Primitives — Modulz"
        description="Open-source, white-label components for building React apps."
      />

      <Box mt={6} mb={8}>
        <Container size={2}>
          <Heading size={5} mb={4} sx={{ textAlign: 'center', fontWeight: 500, letterSpacing: '-.052em' }}>
            White-label components for building design systems.
          </Heading>

          <Heading as="h2" size={2} weight="normal" sx={{ textAlign: 'center', color: 'gray700', lineHeight: '4' }}>
            An open-source component library for building accessible design systems.
          </Heading>

          <Flex sx={{
            pt: 8,
            pb: 9,
            justifyContent: 'center'
          }}>
            <Badge
              size={1}
              sx={{
                fontFamily: 'Söhne Mono',
                fontSize: '15px',
                py: 2,
                px: '2ch',
              }}
              style={{
                lineHeight: '1',
              }}>
              Coming in July
            </Badge>
          </Flex>
        </Container>

        <Box>
          <Box>
            <Flex sx={{ alignItems: 'center', userSelect: 'none', pb: 7 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'gray200',
                  px: '3',
                  height: '6',
                  fontSize: '3',
                  fontWeight: '500',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Button
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  textAlign: 'center',
                  px: '2',
                  height: '4',
                  fontSize: '1',
                  border: '1px solid',
                  borderColor: 'gray300',
                  color: 'gray700',
                  fontWeight: '500',
                  borderRadius: '9999px',
                  mr: '8',
                }}
              >
                Badge
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'gray200',
                  height: '3px',
                  width: '100px',
                  borderRadius: '9999px',
                  position: 'relative',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray500',
                    height: '100%',
                    width: '50%',
                    borderRadius: '9999px',
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'gray300',
                    boxShadow: '0 1px 3px rgba(0,0,0,.05)',
                    height: '15px',
                    width: '15px',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-7px',
                    top: '-5px',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'gray200',
                  height: '2',
                  width: '150px',
                  borderRadius: '9999px',
                  position: 'relative',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray500',
                    backgroundImage:
                      'linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)',
                    height: '100%',
                    width: '50%',
                    borderRadius: '9999px 0 0 9999px',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'white',
                  borderRadius: '2',
                  position: 'relative',
                  py: '2',
                  mr: '8',
                  boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  This is a menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Second menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Another menu item
                </Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'white',
                  borderRadius: '2',
                  position: 'relative',
                  py: '2',
                  mr: '8',
                  boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Calendar
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Second menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Another menu item
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: 'conic-gradient(hsl(208,10%,75%) 68%, hsl(210,15%,90%) 0)',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    width: '138px',
                    height: '138px',
                    borderRadius: '50%',
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '8',
                      color: 'gray900',
                    }}
                  >
                    68%
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'gray400',
                  height: '3',
                  width: '6',
                  borderRadius: '9999px',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    height: '11px',
                    width: '11px',
                    margin: '2px',
                    borderRadius: '50%',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5',
                  width: '5',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '50%',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray600',
                    height: '9px',
                    width: '9px',
                    borderRadius: '50%',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5',
                  width: '5',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '6',
                  width: '6',
                  border: '1px solid',
                  borderColor: 'gray300',
                  borderRadius: '50%',
                  fontSize: '3',
                  color: 'gray700',
                  mr: '8',
                }}
              >
                A
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5',
                  px: 1,
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                Alert
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2',
                  fontSize: '2',
                  borderRadius: '2',
                  boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
                  mr: '8',
                }}
              >
                <Flex sx={{ alignItems: 'center' }}>
                  <Box ml="1">This is a toast message.</Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '5',
                      width: '5',
                      ml: '1',
                      color: 'gray700',
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Box>
                </Flex>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  width: '200px',
                  padding: '3',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                <Flex sx={{ alignItems: 'center' }}>
                  <Box sx={{ mr: '2' }}>
                    <Box
                      sx={{
                        height: '6',
                        width: '6',
                        backgroundColor: 'gray300',
                        borderRadius: '50%',
                      }}
                    ></Box>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        height: '1',
                        backgroundColor: 'gray300',
                        borderRadius: '999px',
                        mb: '2',
                      }}
                    ></Box>
                    <Box
                      sx={{
                        height: '1',
                        width: '50%',
                        backgroundColor: 'gray300',
                        borderRadius: '999px',
                      }}
                    ></Box>
                  </Box>
                </Flex>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  height: '6',
                  width: '200px',
                  px: '2',
                  fontSize: '3',
                  color: 'gray600',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                Input
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1',
                  fontFamily: 'menlo',
                  fontSize: '2',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Code
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'gray200',
                  px: '3',
                  height: '6',
                  fontSize: '3',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Select
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2',
                  backgroundColor: 'gray900',
                  fontSize: '2',
                  color: 'white',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Tooltip
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex sx={{ alignItems: 'center', userSelect: 'none', py: 7, flexDirection: 'row-reverse' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'gray200',
                  px: '3',
                  height: '6',
                  fontSize: '3',
                  fontWeight: '500',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Button
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  textAlign: 'center',
                  px: '2',
                  height: '4',
                  fontSize: '1',
                  border: '1px solid',
                  borderColor: 'gray300',
                  color: 'gray700',
                  fontWeight: '500',
                  borderRadius: '9999px',
                  mr: '8',
                }}
              >
                Badge
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'gray200',
                  height: '3px',
                  width: '100px',
                  borderRadius: '9999px',
                  position: 'relative',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray500',
                    height: '100%',
                    width: '50%',
                    borderRadius: '9999px',
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'gray300',
                    boxShadow: '0 1px 3px rgba(0,0,0,.05)',
                    height: '15px',
                    width: '15px',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-7px',
                    top: '-5px',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'gray200',
                  height: '2',
                  width: '150px',
                  borderRadius: '9999px',
                  position: 'relative',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray500',
                    backgroundImage:
                      'linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)',
                    height: '100%',
                    width: '50%',
                    borderRadius: '9999px 0 0 9999px',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'white',
                  borderRadius: '2',
                  position: 'relative',
                  py: '2',
                  mr: '8',
                  boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  This is a menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Second menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Another menu item
                </Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'white',
                  borderRadius: '2',
                  position: 'relative',
                  py: '2',
                  mr: '8',
                  boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Calendar
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Second menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Menu item
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: '6',
                    height: '6',
                    fontSize: '1',
                  }}
                >
                  Another menu item
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: 'conic-gradient(hsl(208,10%,75%) 68%, hsl(210,15%,90%) 0)',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    width: '138px',
                    height: '138px',
                    borderRadius: '50%',
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '8',
                      color: 'gray900',
                    }}
                  >
                    68%
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  backgroundColor: 'gray400',
                  height: '3',
                  width: '6',
                  borderRadius: '9999px',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    height: '11px',
                    width: '11px',
                    margin: '2px',
                    borderRadius: '50%',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5',
                  width: '5',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '50%',
                  mr: '8',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'gray600',
                    height: '9px',
                    width: '9px',
                    borderRadius: '50%',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5',
                  width: '5',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
                    fill="#282B2E"
                  />
                </svg>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '6',
                  width: '6',
                  border: '1px solid',
                  borderColor: 'gray300',
                  borderRadius: '50%',
                  fontSize: '3',
                  color: 'gray700',
                  mr: '8',
                }}
              >
                A
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '5',
                  px: 1,
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                Alert
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2',
                  fontSize: '2',
                  borderRadius: '2',
                  boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
                  mr: '8',
                }}
              >
                <Flex sx={{ alignItems: 'center' }}>
                  <Box ml="1">This is a toast message.</Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '5',
                      width: '5',
                      ml: '1',
                      color: 'gray700',
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Box>
                </Flex>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  width: '200px',
                  padding: '3',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                <Flex sx={{ alignItems: 'center' }}>
                  <Box sx={{ mr: '2' }}>
                    <Box
                      sx={{
                        height: '6',
                        width: '6',
                        backgroundColor: 'gray300',
                        borderRadius: '50%',
                      }}
                    ></Box>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        height: '1',
                        backgroundColor: 'gray300',
                        borderRadius: '999px',
                        mb: '2',
                      }}
                    ></Box>
                    <Box
                      sx={{
                        height: '1',
                        width: '50%',
                        backgroundColor: 'gray300',
                        borderRadius: '999px',
                      }}
                    ></Box>
                  </Box>
                </Flex>
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  height: '6',
                  width: '200px',
                  px: '2',
                  fontSize: '3',
                  color: 'gray600',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '1',
                  mr: '8',
                }}
              >
                Input
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1',
                  fontFamily: 'menlo',
                  fontSize: '2',
                  border: '1px solid',
                  borderColor: 'gray400',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Code
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexShrink: 0,
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'gray200',
                  px: '3',
                  height: '6',
                  fontSize: '3',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Select
              </Box>
              <Box
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2',
                  backgroundColor: 'gray900',
                  fontSize: '2',
                  color: 'white',
                  borderRadius: '2',
                  mr: '8',
                }}
              >
                Tooltip
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box sx={{
          py: 9,
        }}>
          <Container size={2}>
            <Grid
              sx={{
                gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
                gap: 7,
              }}
            >
              <Box>
                <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                  Accessible
                </Heading>
                <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                  Primitives adhere to WAI-ARIA guidelines and are tested regularly in a wide selection of modern browsers and assistive technologies.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                  Functional
                </Heading>
                <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                  Primitives are feature-rich, with support for keyboard interaction, collision detection, focus trapping, dynamic resizing, scroll locking, native fallbacks, and more.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                  Interoperable
                </Heading>
                <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                  Fully interoperable with Modulz Editor and compatible with Modulz design tool plugins.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                  Themeable
                </Heading>
                <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                  Primitives are built to be themed. No need to override opinionated styles—Primitives ship with zero presentational styles.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                  Composable
                </Heading>
                <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                  Components were built to be composed.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size={1} mb={3} sx={{ fontWeight: 500 }}>
                  Open-source
                </Heading>
                <Text as="p" size={4} sx={{ lineHeight: '3' }}>
                  Primitives are free and open-source under the MIT license.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Box>

        <Divider mx="auto" mb={9} size={2} />

        <Box>
          <Container size={1}>
            <Text as="p" size={4} sx={{ lineHeight: '3', mb: 3 }}>Most of us share similar definitions for common UI patterns like accordion, checkbox, combobox, dialog, dropdown, select, slider, and tooltip. These UI patterns are documented by WAI-ARIA and generally understood by the community.</Text>
            <Text as="p" size={4} sx={{ lineHeight: '3', mb: 3 }}>However, the implementations provided to us by the web platform are inadequate. They're either completely missing, lacking in functionality, or cannot be customised sufficiently.</Text>
            <Text as="p" size={4} sx={{ lineHeight: '3', mb: 3 }}>Developers are forced to build custom components for each product. As a result, most components on the web are inaccessible, non-performant, and lacking important features.</Text>
            <Text as="p" size={4} sx={{ lineHeight: '3', mb: 3 }}>Our goal is to create a well-funded, open-source library of white-label components that the community can use to build accessible design systems.</Text>
          </Container>
        </Box>

      </Box>
    </Box>
  );
};

export default Primitives;
