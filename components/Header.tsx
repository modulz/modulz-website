import React from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Text,
  Link,
  Flex,
  Pipe,
  Popover,
  ChromelessButton,
  Badge,
  Heading,
  Divider,
  VisuallyHidden,
} from '@modulz/radix';
import { Logo } from './Logo';
import { HideInProd } from './HideInProd';
import { PlusIcon } from '@modulz/radix-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Container size={2} sx={{ maxWidth: 'none' }}>
      <Flex py={4} sx={{ alignItems: 'flex-start' }}>
        <NextLink href="/" passHref>
          <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            <VisuallyHidden>Modulz homepage</VisuallyHidden>
            <Logo aria-hidden />
          </Link>
        </NextLink>

        <Flex ml="auto" sx={{ flexDirection: ['row', 'row'], alignItems: ['center', 'center'] }}>
          <ChromelessButton
            ref={buttonRef}
            onClick={() => setIsOpen(true)}
            sx={{
              py: 1,
              px: 2,
              borderRadius: 1,
              bg: isOpen ? 'gray200' : undefined,
              ':hover': { bg: 'gray200' },
            }}
          >
            <Text size={3} sx={{ color: 'gray700' }}>
              <Flex as="span" sx={{ alignItems: 'center' }}>
                Product
                <Box as="span" ml={1}>
                  <PlusIcon />
                </Box>
              </Flex>
            </Text>
          </ChromelessButton>

          <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Box py={1} sx={{ width: 300 }}>
              <Box py={2} px={4} sx={{ userSelect: 'none' }}>
                <Flex sx={{ alignItems: 'center' }}>
                  <Heading size={0} sx={{ color: 'gray600' }}>
                    Editor
                  </Heading>
                  <Badge ml={1}>Coming soon</Badge>
                </Flex>
                <Text size={2} sx={{ color: 'gray600', lineHeight: 1 }}>
                  A visual component editor for editing .interop component files.
                </Text>
              </Box>

              <NextLink href="/styleguide" passHref>
                <Box
                  as="a"
                  py={2}
                  px={4}
                  sx={{ textDecoration: 'none', color: 'inherit', display: 'block', ':hover': { bg: 'gray200' } }}
                  onClick={() => setIsOpen(false)}
                >
                  <Heading size={0}>
                    Styleguide
                  </Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Keep your team in sync with a gorgeous, generated styleguide.
                  </Text>
                </Box>
              </NextLink>

              <Divider my={1} />
              <a href="/primitives" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Primitives</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    White-label components for building design systems.
                  </Text>
                </Box>
              </a>
              <a href="https://radix.modulz.app" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box as="span" py={2} px={4} sx={{ display: 'block', ':hover': { bg: 'gray200' } }}>
                  <Heading size={0}>Radix</Heading>
                  <Text size={2} sx={{ color: 'gray700', lineHeight: 1 }}>
                    Our internal design system—built on Primitives.
                  </Text>
                </Box>
              </a>
            </Box>
          </Popover>

          <Text size={3} sx={{ color: 'gray700' }} ml={[2, 6]}>
            <NextLink href="/about" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>About</Link>
            </NextLink>
          </Text>
          <HideInProd>
            <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
              <NextLink href="/learn" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
              </NextLink>
            </Text>
          </HideInProd>
          <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
            <NextLink href="/blog" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Blog</Link>
            </NextLink>
          </Text>
          <HideInProd>
            <Text size={3} sx={{ color: 'gray700' }} ml={[4, 7]}>
              <NextLink href="/pricing" passHref>
                <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Pricing</Link>
              </NextLink>
            </Text>
          </HideInProd>

          <Pipe mx={[2, 5]} />

          <Text size={3} sx={{ color: 'gray700' }}>
            <Link href="https://core.modulz.app" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
