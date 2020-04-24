import React from 'react';
import NextLink from 'next/link';
import { Container, Box, Text, Link, Flex, Pipe, Popover } from '@modulz/radix';
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Container size={2} sx={{ maxWidth: 'none' }}>
      <Flex py={4} sx={{ alignItems: 'flex-start' }}>
        <NextLink href="/" passHref>
          <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
            <Logo />
          </Link>
        </NextLink>

        <Flex ml="auto" sx={{ flexDirection: ['column', 'row'], alignItems: ['flex-end', 'center'] }}>
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(true)}
            style={{
              background: 'transparent',
              border: 0,
              appearance: 'none',
              outline: 'none',
              lineHeight: 1,
              padding: '0',
            }}
          >
            <Text size={3} sx={{ color: 'gray700', lineHeight: 1 }}>Product</Text>
          </button>
          <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Box px={3} py={2}>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
                <NextLink href="/styleguide" passHref>
                  <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Tokens</Link>
                </NextLink>
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
                <NextLink href="/editor" passHref>
                  <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Editor</Link>
                </NextLink>
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
                <NextLink href="/styleguide" passHref>
                  <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Components</Link>
                </NextLink>
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
                <NextLink href="/styleguide" passHref>
                  <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Playground</Link>
                </NextLink>
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
                <NextLink href="/styleguide" passHref>
                  <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Styleguide</Link>
                </NextLink>
              </Text>
              <Text as="p" size={3} sx={{ color: 'gray700', lineHeight: 3 }} mr={6}>
                <NextLink href="/" passHref>
                  <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Radix</Link>
                </NextLink>
              </Text>
            </Box>
          </Popover>
          <Text size={3} ml={7} sx={{ color: 'gray700', lineHeight: 1 }}>
            <NextLink href="/about" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>About</Link>
            </NextLink>
          </Text>
          <Text size={3} ml={7} sx={{ color: 'gray700', lineHeight: 1 }}>
            <NextLink href="/learn" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Learn</Link>
            </NextLink>
          </Text>
          <Text size={3} ml={7} sx={{ color: 'gray700', lineHeight: 1 }}>
            <NextLink href="/blog" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Blog</Link>
            </NextLink>
          </Text>
          <Text size={3} ml={7} sx={{ color: 'gray700', lineHeight: 1 }}>
            <NextLink href="/pricing" passHref>
              <Link sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>Pricing</Link>
            </NextLink>
          </Text>
          <Pipe mx={5} />
          <Text size={3} sx={{ color: 'gray700', lineHeight: 1 }}>
            <Link href="https://modulz.app/login" sx={{ color: 'inherit', ':focus': { boxShadow: 'none' } }}>
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
