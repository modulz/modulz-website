import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme, Container, Box, AspectRatio, Flex, Divider, Text, Code } from '@modulz/radix';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { Cursor } from '../components/Cursor';

const Editor = () => {
  const tl = gsap.timeline({ paused: !true, delay: 1, repeat: -1, repeatDelay: 2, defaults: { ease: 'expo' } });

  const linter = React.useRef(null);

  React.useEffect(() => {
    const popover = linter.current.querySelector('.popover');
    const counter = linter.current.querySelector('.counter');
    const notificationBubble = linter.current.querySelector('.notification-bubble');
    const notificationBubbleRect = notificationBubble.getBoundingClientRect();
    const newNotification = linter.current.querySelector('.new-notification');
    const newNotificationContent = linter.current.querySelector('.new-notification > *');
    const cursor = linter.current.querySelector('.cursor');
    const cursorRect = cursor.getBoundingClientRect();
    const checkIcon = linter.current.querySelector('.check-icon');
    const checkIconRect = checkIcon.getBoundingClientRect();
    const closeIcon = linter.current.querySelector('.close-icon');
    const closeIconRect = closeIcon.getBoundingClientRect();

    tl.to(notificationBubble, 0.5, {
      opacity: 1,
      onStart: () => (counter.innerHTML = '1'),
    });

    tl.to(
      cursor,
      0.5,
      {
        y: notificationBubbleRect.bottom - cursorRect.top - cursorRect.height / 2,
        x: notificationBubbleRect.left - cursorRect.left + cursorRect.width / 2,
      },
      '+=0.2'
    );

    tl.to(
      cursor,
      0.2,
      {
        scale: 0.8,
      },
      '+=0.3'
    );

    tl.to(cursor, 0.2, {
      scale: 1,
    });

    tl.to(popover, 0.5, {
      opacity: 1,
      x: -4,
    });

    tl.to(
      cursor,
      0.5,
      {
        y: checkIconRect.bottom - cursorRect.top - 7,
        x: checkIconRect.left - cursorRect.left,
      },
      '+=0.2'
    );

    tl.to(
      checkIcon,
      0,
      {
        color: theme.colors.gray900,
      },
      '-=0.2'
    );

    tl.to(
      cursor,
      0.2,
      {
        scale: 0.8,
      },
      '+=0.3'
    );

    tl.to(cursor, 0.2, {
      scale: 1,
    });

    tl.to(notificationBubble, 0.5, {
      opacity: 0,
      onStart: () => (counter.innerHTML = '0'),
    });

    tl.to(
      cursor,
      0.5,
      {
        y: closeIconRect.bottom - cursorRect.top - 7,
        x: closeIconRect.left - cursorRect.left,
      },
      '+=0.2'
    );

    // remove check icon "hover state"
    tl.to(
      checkIcon,
      0,
      {
        color: theme.colors.gray700,
      },
      '-=0.5'
    );

    tl.to(
      closeIcon,
      0,
      {
        color: theme.colors.gray900,
      },
      '-=0.2'
    );

    tl.to(
      cursor,
      0.2,
      {
        scale: 0.8,
      },
      '+=0.3'
    );

    tl.to(cursor, 0.2, {
      scale: 1,
    });

    tl.to(
      popover,
      0.5,
      {
        opacity: 0,
        x: 0,
      },
      '-=0.2'
    );
  }, []);

  return (
    <Box>
      <TitleAndMetaTags />

      <Container sx={{ maxWidth: 'fit-content' }} py={9}>
        <Box ref={linter} sx={{ position: 'relative', zIndex: 3 }}>
          <LintingIllustration />
        </Box>
      </Container>
    </Box>
  );
};

export default Editor;

export const LintingIllustration = () => {
  return (
    <Flex sx={{ position: 'relative', userSelect: 'none', pointerEvents: 'none' }}>
      <Box>
        <Box
          className="popover"
          sx={{
            flexShrink: 0,
            backgroundColor: 'white',
            borderRadius: '2',
            position: 'relative',
            boxShadow: '0 10px 38px -10px rgba(22,23,24,0.35), 0 10px 20px -15px rgba(22,23,24,0.2)',
            maxHeight: '440px',
            maxWidth: '320px',
            overflow: 'hidden',
            opacity: 0,
          }}
        >
          <Flex
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              py: '3',
              px: '4',
            }}
          >
            <Text size={4} weight="medium" style={{ lineHeight: '1' }}>
              Linter warnings
            </Text>
            <Box mr={-1} sx={{ color: 'gray700' }}>
              <CrossIcon className="close-icon" />
            </Box>
          </Flex>
          <Box
            className="new-notification"
            sx={{
              // height: 0,
              backgroundColor: 'blue100',
              overflow: 'hidden',
            }}
          >
            <Flex
              sx={{
                py: '2',
                px: '4',
                borderTop: '1px solid',
                borderColor: 'gray300',
              }}
            >
              <Box mr={3} sx={{ color: 'red700', marginTop: '3px' }}>
                <LetterIcon />
              </Box>
              <Box>
                <Text size={2} sx={{ display: 'block', lineHeight: '1' }}>
                  <Code>Button</Code> font size is too small at <Code>10px</Code>. The recommended minimum font size is{' '}
                  <Code>12px</Code>.
                </Text>
              </Box>
              <Box mr={-1} ml={2} sx={{ alignSelf: 'center', color: 'gray700' }}>
                <CheckIcon className="check-icon" />
              </Box>
            </Flex>
          </Box>
          <Flex
            sx={{
              py: '2',
              px: '4',
              borderTop: '1px solid',
              borderColor: 'gray300',
            }}
          >
            <Box mr={3} sx={{ color: 'red700', marginTop: '3px' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 9.07975 1.70195 10.5254 2.65397 11.6389L2.64644 11.6464L2.76158 11.7616C2.91197 11.9287 3.07107 12.0878 3.23817 12.2382L3.35355 12.3535L3.3611 12.346C4.47461 13.2979 5.92011 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 5.92011 13.2979 4.47461 12.346 3.3611L12.3535 3.35355L12.2382 3.23817C12.0878 3.07107 11.9287 2.91197 11.7616 2.76158L11.6464 2.64644L11.6389 2.65397C10.5254 1.70195 9.07975 1.12704 7.49988 1.12704ZM10.9647 3.32815C10.0251 2.54688 8.81736 2.07704 7.49988 2.07704C4.50493 2.07704 2.07704 4.50493 2.07704 7.49988C2.07704 8.81736 2.54688 10.0251 3.32815 10.9647L10.9647 3.32815ZM4.03528 11.6718C4.97485 12.453 6.18251 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.18251 12.453 4.97485 11.6718 4.03528L4.03528 11.6718Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Box>
              <Text size={2} sx={{ display: 'block', lineHeight: '1' }}>
                <Code>Button</Code> color contrast ratio is too low at <Code>4.46</Code>. The recommended minimum
                contrast ratio is <Code>4.50</Code>.
              </Text>
            </Box>
          </Flex>
          <Flex
            sx={{
              py: '2',
              px: '4',
              borderTop: '1px solid',
              borderColor: 'gray300',
            }}
          >
            <Box mr={3} sx={{ color: 'gray600', marginTop: '3px' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 9.07975 1.70195 10.5254 2.65397 11.6389L2.64644 11.6464L2.76158 11.7616C2.91197 11.9287 3.07107 12.0878 3.23817 12.2382L3.35355 12.3535L3.3611 12.346C4.47461 13.2979 5.92011 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 5.92011 13.2979 4.47461 12.346 3.3611L12.3535 3.35355L12.2382 3.23817C12.0878 3.07107 11.9287 2.91197 11.7616 2.76158L11.6464 2.64644L11.6389 2.65397C10.5254 1.70195 9.07975 1.12704 7.49988 1.12704ZM10.9647 3.32815C10.0251 2.54688 8.81736 2.07704 7.49988 2.07704C4.50493 2.07704 2.07704 4.50493 2.07704 7.49988C2.07704 8.81736 2.54688 10.0251 3.32815 10.9647L10.9647 3.32815ZM4.03528 11.6718C4.97485 12.453 6.18251 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.18251 12.453 4.97485 11.6718 4.03528L4.03528 11.6718Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Box>
              <Text size={2} sx={{ display: 'block', lineHeight: '1' }}>
                <Code>Button</Code> font size is too small at <Code>10px</Code>. The recommended minimum font size is{' '}
                <Code>12px</Code>.
              </Text>
            </Box>
          </Flex>
          <Flex
            sx={{
              py: '2',
              px: '4',
              borderTop: '1px solid',
              borderColor: 'gray300',
            }}
          >
            <Box mr={3} sx={{ color: 'gray600', marginTop: '3px' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 9.07975 1.70195 10.5254 2.65397 11.6389L2.64644 11.6464L2.76158 11.7616C2.91197 11.9287 3.07107 12.0878 3.23817 12.2382L3.35355 12.3535L3.3611 12.346C4.47461 13.2979 5.92011 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 5.92011 13.2979 4.47461 12.346 3.3611L12.3535 3.35355L12.2382 3.23817C12.0878 3.07107 11.9287 2.91197 11.7616 2.76158L11.6464 2.64644L11.6389 2.65397C10.5254 1.70195 9.07975 1.12704 7.49988 1.12704ZM10.9647 3.32815C10.0251 2.54688 8.81736 2.07704 7.49988 2.07704C4.50493 2.07704 2.07704 4.50493 2.07704 7.49988C2.07704 8.81736 2.54688 10.0251 3.32815 10.9647L10.9647 3.32815ZM4.03528 11.6718C4.97485 12.453 6.18251 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.18251 12.453 4.97485 11.6718 4.03528L4.03528 11.6718Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Box>
              <Text size={2} sx={{ display: 'block', lineHeight: '1' }}>
                <Code>Button</Code> font size is too small at <Code>10px</Code>. The recommended minimum font size is{' '}
                <Code>12px</Code>.
              </Text>
            </Box>
          </Flex>
          <Flex
            sx={{
              py: '2',
              px: '4',
              borderTop: '1px solid',
              borderColor: 'gray300',
            }}
          >
            <Box mr={3} sx={{ color: 'gray600', marginTop: '3px' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 9.07975 1.70195 10.5254 2.65397 11.6389L2.64644 11.6464L2.76158 11.7616C2.91197 11.9287 3.07107 12.0878 3.23817 12.2382L3.35355 12.3535L3.3611 12.346C4.47461 13.2979 5.92011 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 5.92011 13.2979 4.47461 12.346 3.3611L12.3535 3.35355L12.2382 3.23817C12.0878 3.07107 11.9287 2.91197 11.7616 2.76158L11.6464 2.64644L11.6389 2.65397C10.5254 1.70195 9.07975 1.12704 7.49988 1.12704ZM10.9647 3.32815C10.0251 2.54688 8.81736 2.07704 7.49988 2.07704C4.50493 2.07704 2.07704 4.50493 2.07704 7.49988C2.07704 8.81736 2.54688 10.0251 3.32815 10.9647L10.9647 3.32815ZM4.03528 11.6718C4.97485 12.453 6.18251 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.18251 12.453 4.97485 11.6718 4.03528L4.03528 11.6718Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Box>
              <Text size={2} sx={{ display: 'block', lineHeight: '1' }}>
                <Code>Button</Code> font size is too small at <Code>10px</Code>. The recommended minimum font size is{' '}
                <Code>12px</Code>.
              </Text>
            </Box>
          </Flex>
          <Flex
            sx={{
              py: '2',
              px: '4',
              borderTop: '1px solid',
              borderColor: 'gray300',
            }}
          >
            <Box mr={3} sx={{ color: 'gray600', marginTop: '3px' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 9.07975 1.70195 10.5254 2.65397 11.6389L2.64644 11.6464L2.76158 11.7616C2.91197 11.9287 3.07107 12.0878 3.23817 12.2382L3.35355 12.3535L3.3611 12.346C4.47461 13.2979 5.92011 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 5.92011 13.2979 4.47461 12.346 3.3611L12.3535 3.35355L12.2382 3.23817C12.0878 3.07107 11.9287 2.91197 11.7616 2.76158L11.6464 2.64644L11.6389 2.65397C10.5254 1.70195 9.07975 1.12704 7.49988 1.12704ZM10.9647 3.32815C10.0251 2.54688 8.81736 2.07704 7.49988 2.07704C4.50493 2.07704 2.07704 4.50493 2.07704 7.49988C2.07704 8.81736 2.54688 10.0251 3.32815 10.9647L10.9647 3.32815ZM4.03528 11.6718C4.97485 12.453 6.18251 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.18251 12.453 4.97485 11.6718 4.03528L4.03528 11.6718Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Box>
              <Text size={2} sx={{ display: 'block', lineHeight: '1' }}>
                Spacing value doesn't belong to space scale.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Flex
          ml={4}
          sx={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4',
            width: '6',
            height: '6',
            backgroundColor: 'yellow600',
            borderRadius: '50%',
            color: 'black',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '35px',
              height: '35px',
              backgroundColor: 'hsl(208, 10%, 90%)',
              borderRadius: '50%',
            }}
          />
          <Box
            className="notification-bubble"
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '35px',
              height: '35px',
              backgroundColor: 'yellow500',
              opacity: 0,
              borderRadius: '50%',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6',
              height: '6',
              border: '1px solid',
              borderColor: 'yellow300',
              borderRadius: '50%',
              transform: 'scale(1.4)',
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6',
              height: '6',
              border: '1px solid',
              borderColor: 'yellow200',
              borderRadius: '50%',
              transform: 'scale(1.8)',
            }}
          ></Box>
          <Box className="counter" sx={{ position: 'absolute' }}>
            0
          </Box>
        </Flex>
      </Box>
      <Cursor />
    </Flex>
  );
};

const LetterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00916 6.68569 8.00916 8.60972C8.00916 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1344V11.1416V11.1488V11.1559V11.1629V11.1698V11.1767V11.1836V11.1904V11.1971V11.2037V11.2103V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4141V11.4182V11.4222V11.4261V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4874V11.4899V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5091V11.5109V11.5126V11.5142V11.5157V11.5172V11.5185V11.5198V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5274V11.528V11.5286V11.529V11.5294V11.5296V11.5298V11.53L13.6043 11.53H13.1543C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53H13.6043L14.0543 11.53V11.5298V11.5296V11.5294V11.529V11.5286V11.528V11.5274V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5198V11.5185V11.5172V11.5157V11.5142V11.5126V11.5109V11.5091V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.4899V11.4874V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4261V11.4222V11.4182V11.4141V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2103V11.2037V11.1971V11.1904V11.1836V11.1767V11.1698V11.1629V11.1559V11.1488V11.1416V11.1344V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9951V10.9869V10.9785V10.9702V10.9617V10.9532V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8834V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8196V10.8103V10.801V10.7915V10.7821V10.7725V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6946V10.6847V10.6747V10.6646V10.6545V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3536V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.07V10.0578V10.0454V10.0331V10.0207V10.0083V9.99581V9.98331V9.97079V9.95822V9.94563V9.933V9.92033V9.90763V9.89491V9.88214V9.86935V9.85652V9.84366V9.83077V9.81784V9.80489V9.7919V9.77888V9.76583V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91983V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54951V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534V7.29011V7.27489V7.25967V7.24445V7.22925V7.21405V7.19885V7.18366V7.16848V7.15331V7.13814V7.12298V7.10783V7.09268V7.07754V7.06241V7.04729V7.03218V7.01708V7.00198V6.9869V6.97182V6.95675V6.94169V6.92665V6.91161V6.89658V6.88157V6.86656V6.85157V6.83658V6.82161V6.80665V6.79171V6.77677V6.76185V6.74693V6.73204V6.71715V6.70228V6.68742V6.67258V6.65774V6.64293V6.62812V6.61333V6.59856V6.5838V6.56906V6.55433V6.53962V6.52492V6.51024V6.49557V6.48092V6.46629V6.45167V6.43707V6.42249V6.40793V6.39338V6.37885V6.36434V6.34985V6.33537V6.32092V6.30648V6.29206V6.27767V6.26329V6.24893V6.23459V6.22027V6.20597V6.19169V6.17744V6.1632V6.14899V6.13479V6.12062V6.10647V6.09234V6.07824V6.06415V6.05009V6.03606V6.02204V6.00805V5.99408V5.98014V5.96622V5.95232V5.93845V5.9246V5.91078V5.89699V5.88321V5.86947V5.85575V5.84205V5.82838V5.81474V5.80113V5.78754V5.77398V5.76044V5.74693V5.73345V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V5.73345V5.74693V5.76044V5.77398V5.78754V5.80113V5.81474V5.82838V5.84205V5.85575V5.86947V5.88321V5.89699V5.91078V5.9246V5.93845V5.95232V5.96622V5.98014V5.99408V6.00805V6.02204V6.03606V6.05009V6.06415V6.07824V6.09234V6.10647V6.12062V6.13479V6.14899V6.1632V6.17744V6.19169V6.20597V6.22027V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 7.30534V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.772 10.4952 13.1543 9.79823V9.7919V9.77888V9.76583V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91983V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54951V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534Z"
      fill="currentColor"
    />
  </svg>
);

const BlockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
      fill="#282B2E"
    />
  </svg>
);

const CrossIcon = (props: any) => (
  <svg {...props} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z"
      fill="currentColor"
    />
  </svg>
);

const CheckIcon = (props: any) => (
  <svg {...props} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
      fill="currentColor"
    />
  </svg>
);
