import React from 'react';
import { Container, Code, Box, Grid, Heading, Badge, Section, Button, Subtitle, Title, Paragraph, Input, IconButton, Text, Separator, Flex } from '@modulz/design-system';
import { BetaAccess } from '../components/BetaAccess';
import { LintingPopover } from '../components/LintingPopover';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const States = () => {
  return (
    <Section size="3">
      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '$8',
            alignItems: 'center',
          }}
        >
          <Box css={{ flexGrow: 1, flexBasis: 0 }}>
            <Box css={{ mb: '$5' }}>
              <Code
                css={{
                  mb: '$5',
                  fontSize: '$4',
                }}
              >
                States
              </Code>
            </Box>
            <Text as="h3" size="8" css={{ fontWeight: 500, mb: '$4', lineHeight: '40px' }}>
              Design composable component APIs with variants
            </Text>
            <Paragraph>
              Stitches has built-in solutions for tokens and theming, which use CSS variables under-the-hood. You can define multiple themes, then expose them to any part of your app.
            </Paragraph>
            <Flex css={{ ai: 'center', pt: '$5' }}>
              <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
              </Box>
              <Box>
                <Text as="p" size="3" css={{ fontWeight: '500', ml: '$2' }}>
                  Compound states
                </Text>
              </Box>
            </Flex>
            <Box css={{ pl: '$7' }}>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px', ml: '$2' }}>
                Modulz Styleguide provides fully-featured design system documentation.
              </Text>
            </Box>
            <Flex css={{ ai: 'center', pt: '$5' }}>
              <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
              </Box>
              <Box>
                <Text as="p" size="3" css={{ fontWeight: '500', ml: '$2' }}>
                  Compound states
                </Text>
              </Box>
            </Flex>
            <Box css={{ pl: '$7' }}>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px', ml: '$2'}}>
                Modulz Styleguide provides fully-featured design system documentation.
              </Text>
            </Box>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', justifyContent: 'space-between', gap: '$6' }}>
              <Flex css={{ flexDirection: 'column', flexGrow: 1, gap: '$4', ai: 'flex-start' }}>
                <Box css={{
                  backgroundImage: 'linear-gradient(0deg, $colors$violet800 0%, $colors$violet700 100%)',
                  border: '1px solid $colors$violet800',
                  boxShadow: '0 3px 10px rgba(0,0,0,.25)',
                  color: 'white',
                  fontSize: '$3',
                  height: '$6',
                  borderRadius: '$pill',
                  px: '$4',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontsize: '$3',
                }}>
                  Button
                </Box>
              </Flex>
              <Box css={{ width: 265, flexShrink: 0, boxShadow: '0 15px 35px -10px rgba(0,0,0,.35)', borderRadius: '$2', py: '$1' }}>
                <Flex css={{ alignItems: 'center', justifyContent: 'space-between', pt: '$1', px: '$3' }}>
                  <Text size="1" css={{ fontWeight: '500' }}>Selector</Text>
                  <Box css={{ mr: '-$2' }}>
                    <IconButton>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="currentColor"/>
                      </svg>
                    </IconButton>
                  </Box>
                </Flex>
                <Box css={{ py: '$1' }}>
                  <Flex css={{ alignItems: 'center', justifyContent: 'space-between', py: '$1', px: '$3', backgroundColor: '$blue600' }}>
                    <Box>
                      <Text size="1" css={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: '$blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: '$1' }}>:base</Text>
                    </Box>
                    <Flex css={{ alignItems: 'center', mr: '-$2' }}>
                      <Text size="1" css={{ mr: '$1', color: 'white' }} style={{ lineHeight: '$1' }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex css={{ alignItems: 'center', justifyContent: 'space-between', py: '$1', px: '$3', }}>
                    <Box>
                      <Text size="1" css={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: '$blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: '$1' }}>:base</Text>
                    </Box>
                    <Flex css={{ alignItems: 'center', mr: '-$2' }}>
                      <Text size="1" css={{ mr: '$1', color: 'white' }} style={{ lineHeight: '$1' }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex css={{ alignItems: 'center', justifyContent: 'space-between', py: '$1', px: '$3', }}>
                    <Box>
                      <Text size="1" css={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: '$blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: '$1' }}>:base</Text>
                    </Box>
                    <Flex css={{ alignItems: 'center', mr: '-$2' }}>
                      <Text size="1" css={{ mr: '$1', color: 'white' }} style={{ lineHeight: '$1' }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                  <Flex css={{ alignItems: 'center', justifyContent: 'space-between', py: '$1', px: '$3', }}>
                    <Box>
                      <Text size="1" css={{ display: 'block', pt: '3px', pr: '4px', pb: '3px', pl: '2px', backgroundColor: '$blue700', color: 'white', fontFamily: 'Söhne Mono' }} style={{ lineHeight: '$1' }}>:base</Text>
                    </Box>
                    <Flex css={{ alignItems: 'center', mr: '-$2' }}>
                      <Text size="1" css={{ mr: '$1', color: 'white' }} style={{ lineHeight: '$1' }}>(27)</Text>
                      <IconButton>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </IconButton>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>

        </Grid>
      </Container>
    </Section>
)};

const Variants = () => {
  return (
    <Section size="3">
      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '$8',
            alignItems: 'center',
          }}
        >

          <Box>
            <Box css={{ mb: '$5' }}>
              <Code
                css={{
                  mb: '$5',
                  fontSize: '$4',
                }}
              >
                Variants
              </Code>
            </Box>
            <Text as="h3" size="8" css={{ fontWeight: 500, mb: '$4', lineHeight: '40px' }}>
              Design composable component APIs with variants
            </Text>
            <Paragraph>
              Stitches has built-in solutions for tokens and theming, which use CSS variables under-the-hood. You can define multiple themes, then expose them to any part of your app.
            </Paragraph>
            <Flex css={{ ai: 'center', pt: '$5' }}>
              <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
              </Box>
              <Box>
                <Text as="p" size="3" css={{ fontWeight: '500', ml: '$2' }}>
                  Compound states
                </Text>
              </Box>
            </Flex>
            <Box css={{ pl: '$7' }}>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px', ml: '$2' }}>
                Modulz Styleguide provides fully-featured design system documentation.
              </Text>
            </Box>
            <Flex css={{ ai: 'center', pt: '$5' }}>
              <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
              </Box>
              <Box>
                <Text as="p" size="3" css={{ fontWeight: '500', ml: '$2' }}>
                  Compound states
                </Text>
              </Box>
            </Flex>
            <Box css={{ pl: '$7' }}>
              <Text as="p" size="3" variant="gray" css={{ lineHeight: '23px', ml: '$2'}}>
                Modulz Styleguide provides fully-featured design system documentation.
              </Text>
            </Box>
          </Box>

          <Box>
            <Flex css={{ alignItems: 'center', justifyContent: 'space-between', gap: '$6' }}>
              <Flex css={{ flexDirection: 'column', flexGrow: 1, gap: '$4', ai: 'flex-start' }}>
                <Box css={{
                  backgroundImage: 'linear-gradient(0deg, $colors$violet800 0%, $colors$violet700 100%)',
                  border: '1px solid $colors$violet800',
                  boxShadow: '0 3px 10px rgba(0,0,0,.25)',
                  color: 'white',
                  fontSize: '$3',
                  height: '$6',
                  borderRadius: '$pill',
                  px: '$4',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontsize: '$3',
                }}>
                  Button
                </Box>
              </Flex>
              <Box css={{ width: 265, flexShrink: 0, boxShadow: '0 15px 35px -10px rgba(0,0,0,.35)', borderRadius: '$2', p: '$3' }}>
                <Flex css={{ alignItems: 'center', justifyContent: 'space-between', mb: '$3' }}>
                  <Text size="1" css={{ fontWeight: 500 }}>Variants</Text>
                </Flex>
                <Box>
                  <Text size="1" css={{ fontWeight: 500, mb: '$3' }}>Size</Text>
                  <Flex css={{ gap: '$2', flexWrap: 'wrap', mb: '$3' }}>
                    <Badge size="2" variant="blue">Small</Badge>
                    <Badge size="2">Medium</Badge>
                    <Badge size="2">Large</Badge>
                  </Flex>
                  <Text size="1" css={{ fontWeight: 500, mb: '$3' }}>Size</Text>
                  <Flex css={{ gap: '$2', flexWrap: 'wrap', mb: '$3' }}>
                    <Badge size="2" variant="blue">Secondary</Badge>
                    <Badge size="2">Primary</Badge>
                    <Badge size="2">Warning</Badge>
                    <Badge size="2">Success</Badge>
                    <Badge size="2">Ghost</Badge>
                  </Flex>
                  <Text size="1" css={{ fontWeight: 500, mb: '$3' }}>Size</Text>
                  <Flex css={{ gap: '$2', flexWrap: 'wrap' }}>
                    <Badge size="2">Waiting</Badge>
                    <Badge size="2">Active</Badge>
                  </Flex>
                </Box>
              </Box>

            </Flex>
          </Box>

        </Grid>
      </Container>
    </Section>
)};

const DesignPage = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Section size="3">
        <Container size="2">
          <Title css={{ textAlign: 'center', mb: '$2' }}>
            The most advanced code generation in the world.
          </Title>
          <Subtitle css={{ textAlign: 'center' }}>
            Style your component library, from color to shadows to animations—without writing code.
          </Subtitle>
        </Container>
      </Section>

      <Container size="2" css={{ maxWidth: '1280px' }}>
        <Flex css={{ justifyContent: 'space-around' }}>
          <Box css={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Panes
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box css={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Variants
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box css={{ position: 'relative', width: '175px', opacity: '1' }}>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Parts
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
          <Box css={{ position: 'relative', width: '175px', opacity: '.5' }}>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1', fontWeight: 500 }}>
              Properties
            </Text>
            <Text as="p" size="2" css={{ letterSpacing: '0', lineHeight: '1' }}>
              Modulz is a visual code editor that empowers teams to design and develop a design system.
            </Text>
          </Box>
        </Flex>
        <img
          src="/home/editor.png"
          style={{
            display: 'block',
            maxWidth: '100%',
            boxShadow: 'hsla(208, 28%, 12%, 0.42) 0px 60px 123px -25px, hsla(208, 25%, 10%, 0.08) 0px 35px 75px -35px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'hsl(208, 18%, 86%) hsl(208, 18%, 86%) hsl(210, 16%, 76%)',
            borderRadius: '10px',
          }}
        />
      </Container>

      <Section size="3">
        <Container size="2">
          <Text
            as="h3"
            size="2"
            css={{
              textAlign: 'center',
              fontWeight: 500,
              color: 'gray700',
              letterSpacing: '.125em',
              textTransform: 'uppercase',
            }}
          >
            Auto Layout
          </Text>
          <Text size="8" css={{ textAlign: 'center', fontWeight: 500 }}>
            Auto Layout, all the things.
          </Text>
          <Paragraph css={{ textAlign: 'center' }}>
            Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
          </Paragraph>
        </Container>
      </Section>

      <Separator size="2" />

      <Box css={{ position: 'relative', p: '$9' }}>
        <Container size="2">
          <Grid
            css={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '$8',
              alignItems: 'center',
            }}
          >
            <Box css={{ alignSelf: 'stretch' }}>
              <Flex css={{ height: '100%', my: -9 }}>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>

              </Flex>
            </Box>
            <Box>
              <Text
                as="h3"
                size="2"
                css={{
                  color: '$blue700',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Söhne Mono'
                }}
              >
                &lt;Design tokens/&gt;
              </Text>
              <Heading css={{ fontWeight: 500 }}>
                Maintain consistency with reusable styles
              </Heading>
              <Text as="p" size="4" css={{ lineHeight: '3px' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
              <Flex css={{ pt: '$3' }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size="3" css={{ fontWeight: '500', lineHeight: '2', mt: '$2', ml: '$2' }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box css={{ pl: '$7' }}>
                <Text as="p" size="3" css={{ color: 'gray700', lineHeight: '2', ml: '$2' }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex css={{ pt: '$3' }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size="3" css={{ fontWeight: '500', lineHeight: '2', mt: '$2', ml: '$2' }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box css={{ pl: '$7' }}>
                <Text as="p" size="3" css={{ color: 'gray700', lineHeight: '2', ml: '$2' }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex css={{ pt: '$3' }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size="3" css={{ fontWeight: '500', lineHeight: '2', mt: '$2', ml: '$2' }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box css={{ pl: '$7' }}>
                <Text as="p" size="3" css={{ color: 'gray700', lineHeight: '2', ml: '$2' }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Separator size="2" />

      <States />
      <Variants />

      <Separator size="2" />

      <Box css={{ position: 'relative', p: '$9' }}>
        <Container size="2">
          <Grid
            css={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '$8',
              alignItems: 'center',
            }}
          >
            <Box css={{ alignSelf: 'stretch' }}>
              <Flex css={{ height: '100%', my: -9 }}>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>
                <Box css={{ width: '20%', height: '20%', backgroundColor: 'hsl(310, 100%, 77%)' }}></Box>
                <Box css={{ width: '5%', backgroundColor: 'hsl(310, 100%, 97%)' }}></Box>

              </Flex>
            </Box>
            <Box>
              <Text
                as="h3"
                size="2"
                css={{
                  color: '$blue700',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Söhne Mono'
                }}
              >
                &lt;Design tokens/&gt;
              </Text>
              <Heading css={{ fontWeight: 500 }}>
                Maintain consistency with reusable styles
              </Heading>
              <Text as="p" size="4" css={{ lineHeight: '3px' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
              <Flex css={{ pt: '$3' }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size="3" css={{ fontWeight: '500', lineHeight: '2', mt: '$2', ml: '$2' }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box css={{ pl: '$7' }}>
                <Text as="p" size="3" css={{ color: 'gray700', lineHeight: '2', ml: '$2' }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex css={{ pt: '$3' }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size="3" css={{ fontWeight: '500', lineHeight: '2', mt: '$2', ml: '$2' }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box css={{ pl: '$7' }}>
                <Text as="p" size="3" css={{ color: 'gray700', lineHeight: '2', ml: '$2' }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
              <Flex css={{ pt: '$3' }}>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
<rect width="45" height="45" fill="white"/>
<path d="M8.5 4V41" stroke="#FFC5FD"/>
<path d="M36.5 4V41" stroke="#FFC5FD"/>
<path d="M41 8.5H4" stroke="#FFC5FD"/>
<path d="M41 36.5H4" stroke="#FFC5FD"/>
<rect x="9" y="9" width="11" height="11" fill="#FF00C7"/>
<rect x="9" y="25" width="11" height="11" fill="#FF00C7"/>
<rect x="25" y="25" width="11" height="11" fill="#FF00C7"/>
<path d="M25.5 13V16" stroke="#FF00C7"/>
<path d="M35.5 13V16" stroke="#FF00C7"/>
<path d="M25.5 18.5V19.5H26.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M34.5 19.5H35.5V18.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M26.5 9.5H25.5V10.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M35.5 10.5V9.5H34.5" stroke="#FF00C7" stroke-linecap="square"/>
<path d="M32 19.5H29" stroke="#FF00C7"/>
<path d="M32 9.5H29" stroke="#FF00C7"/>
</svg>
                </Box>
                <Box>
                  <Text as="p" size="3" css={{ fontWeight: '500', lineHeight: '2', mt: '$2', ml: '$2' }}>
                    Auto Layout
                  </Text>
                </Box>
              </Flex>
              <Box css={{ pl: '$7' }}>
                <Text as="p" size="3" css={{ color: 'gray700', lineHeight: '2', ml: '$2' }}>
                  Modulz Styleguide provides fully-featured design system documentation.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
        <Box css={{ width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'hsl(52, 100%, 50%)', position: 'absolute', left: '-200px', top: '0' }}></Box>
        <Box css={{ width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'hsl(185, 100%, 18%)', position: 'absolute', right: '-200px', top: '200px' }}></Box>
      </Box>

      <Separator size="2" />

      <Box>
        <Container size="2">
          <Grid
            css={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '$8',
              alignItems: 'center',
            }}
          >
            <Box>
              <LintingPopover />
            </Box>
            <Box>
              <Heading css={{ fontWeight: 500 }}>
                Design Linting
              </Heading>
              <Text as="p" size="4" css={{ lineHeight: '3px' }}>
                Modulz Styleguide provides fully-featured design system documentation for teams who need total control.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Separator size="2" />

      <BetaAccess />
    </Box>
  );
};

export default DesignPage;
