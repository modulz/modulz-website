import React from 'react';
import { Container, Flex, Box } from '@modulz/design-system';
const HomepageHero = require('../../public/home/homepage-hero-min.png');

export const LegacyComposerHero = () => (
  <Box aria-hidden>
    <Box sx={{ display: ['none', 'block'] }}>
      <Box mt={8}>
        <Container size={3}>
          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <Flex sx={{ flexGrow: 1, flexBasis: 0, alignItems: 'flex-end', flexDirection: 'column' }}>
              <Box mb={9}>
                <LogoReact />
              </Box>
              <Box sx={{ pr: '160px', pb: '160px', filter: 'grayscale(1)' }}>
                <LogoVue />
              </Box>
              <Box mb={9} sx={{ paddingRight: '160px', filter: 'grayscale(1)' }}>
                <LogoHTML />
              </Box>
              <Box sx={{ filter: 'grayscale(1)' }}>
                <LogoCSS />
              </Box>
            </Flex>
            <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
              <Flex sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    boxShadow:
                      '0 0 0 80px white, 0 0 0 81px hsl(208, 100%, 90%), 0 0 0 160px hsl(208, 100%, 98%), 0 0 0 161px hsl(208, 100%, 92%), 0 0 0 240px white, 0 0 0 241px hsl(208, 100%, 92%), 0 0 0 320px hsl(208, 100%, 99%), 0 0 0 321px hsl(208, 100%, 94%), 0 0 0 400px white, 0 0 0 401px hsl(208, 100%, 94%), 0 0 0 480px hsl(208, 100%, 99%), 0 0 0 481px hsl(208, 100%, 96%), 0 0 0 560px white, 0 0 0 561px hsl(208, 100%, 96%), 0 0 0 640px hsl(208, 100%, 99%), 0 0 0 641px hsl(208, 100%, 96%), 0 0 0 720px white, 0 0 0 721px hsl(208, 100%, 96%)',
                    borderRadius: '50%',
                    zIndex: '-1',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      backgroundColor: 'blue500',
                      backgroundImage:
                        'linear-gradient(to right, hsl(208,100%,50%) 0%,#ffffff 20%,#ffffff 80%,hsl(208,100%,50%) 100%)',
                      top: '50%',
                      left: '0',
                      height: '1px',
                      opacity: '1',
                      width: '480px',
                      marginLeft: '-200px',
                      zIndex: '-1',
                      transform: 'rotate(-52deg)',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      backgroundColor: 'blue500',
                      backgroundImage:
                        'linear-gradient(to right, hsl(208,100%,50%) 0%,#ffffff 20%,#ffffff 80%,hsl(208,100%,50%) 100%)',
                      top: '50%',
                      left: '0',
                      height: '1px',
                      opacity: '1',
                      width: '480px',
                      marginLeft: '-200px',
                      zIndex: '-1',
                      transform: 'rotate(52deg)',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      backgroundColor: 'blue500',
                      backgroundImage:
                        'linear-gradient(to right, hsl(208,100%,50%) 0%,#ffffff 20%,#ffffff 80%,hsl(208,100%,50%) 100%)',
                      top: '50%',
                      left: '0',
                      height: '1px',
                      opacity: '1',
                      width: '540px',
                      marginLeft: '-240px',
                      zIndex: '-1',
                      transform: 'rotate(-19deg)',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      backgroundColor: 'blue500',
                      backgroundImage:
                        'linear-gradient(to right, hsl(208,100%,50%) 0%,#ffffff 20%,#ffffff 80%,hsl(208,100%,50%) 100%)',
                      top: '50%',
                      left: '0',
                      height: '1px',
                      opacity: '1',
                      width: '540px',
                      marginLeft: '-240px',
                      zIndex: '-1',
                      transform: 'rotate(19deg)',
                    }}
                  ></Box>
                  <Box sx={{ backgroundColor: 'white', boxShadow: '0 0 0 20px white' }}>
                    <LogoModulz />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
              <Box mb={9} sx={{ filter: 'grayscale(1)', opacity: '.5' }}>
                <LogoFramer />
              </Box>
              <Box sx={{ pl: '160px', pb: '160px' }}>
                <LogoSketch />
              </Box>
              <Box mb={9} sx={{ pl: '160px', filter: 'grayscale(1)' }}>
                <LogoFigma />
              </Box>
              <Box sx={{ filter: 'grayscale(1)', opacity: '.7' }}>
                <LogoXd />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>

    <Box mt={8} pb={7}>
      <Container size={2} sx={{ maxWidth: '1280px' }}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              backgroundColor: 'blue500',
              top: '-10px',
              left: '50%',
              height: 'calc(100% + 20px)',
              marginLeft: '-2px',
              width: '4px',
              borderRadius: '9999px',
            }}
          />
          <img
            src={HomepageHero}
            style={{
              maxWidth: '100%',
              boxShadow:
                '0px 60px 123px -25px hsla(208, 29%, 12%, 0.42), 0px 35px 75px -35px hsla(208, 24%, 10%, 0.08)',
              borderRadius: '10px',
              verticalAlign: 'middle',
              border: '1px solid',
              borderColor: 'hsl(206, 19%, 86%) hsl(206, 19%, 86%) hsl(210, 16%, 76%)',
            }}
          />
        </Box>
      </Container>
    </Box>
  </Box>
);

const LogoReact = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="74" height="65" viewBox="0 0 74 65" fill="none">
    <path
      d="M73.886 32.5074C73.886 27.6722 67.8308 23.09 58.5472 20.2483C60.6896 10.7862 59.7374 3.25818 55.542 0.84802C54.5749 0.282673 53.4442 0.0148773 52.2094 0.0148773V3.33257C52.8937 3.33257 53.4442 3.46647 53.9054 3.71939C55.9288 4.87984 56.8065 9.29847 56.1222 14.9817C55.9585 16.3802 55.6907 17.8531 55.3634 19.3557C52.4474 18.6416 49.2636 18.0911 45.9162 17.734C43.9077 14.9817 41.8249 12.4823 39.7271 10.2953C44.5772 5.78736 49.1297 3.31769 52.2243 3.31769V0C48.1329 0 42.777 2.916 37.3616 7.97437C31.9462 2.94576 26.5902 0.0595104 22.4989 0.0595104V3.3772C25.5786 3.3772 30.146 5.832 34.9961 10.3101C32.9132 12.4971 30.8304 14.9817 28.8516 17.734C25.4893 18.0911 22.3055 18.6416 19.3895 19.3706C19.0473 17.8828 18.7944 16.4397 18.6159 15.0561C17.9166 9.37285 18.7795 4.95422 20.788 3.7789C21.2343 3.5111 21.8146 3.39208 22.4989 3.39208V0.0743877C21.2492 0.0743877 20.1185 0.342183 19.1366 0.90753C14.956 3.31769 14.0187 10.8309 16.176 20.2632C6.92213 23.1197 0.896729 27.6871 0.896729 32.5074C0.896729 37.3426 6.95189 41.9249 16.2355 44.7665C14.0931 54.2287 15.0453 61.7567 19.2407 64.1669C20.2078 64.7322 21.3385 65 22.5882 65C26.6795 65 32.0354 62.084 37.4509 57.0256C42.8663 62.0542 48.2222 64.9405 52.3135 64.9405C53.5632 64.9405 54.6939 64.6727 55.6759 64.1073C59.8564 61.6972 60.7937 54.184 58.6365 44.7517C67.8606 41.91 73.886 37.3278 73.886 32.5074ZM54.5154 22.5841C53.9649 24.5033 53.2806 26.482 52.5069 28.4607C51.897 27.2705 51.2572 26.0803 50.558 24.8901C49.8736 23.6999 49.1446 22.5395 48.4156 21.4088C50.5282 21.7212 52.5664 22.108 54.5154 22.5841ZM47.7015 38.4287C46.541 40.4372 45.3508 42.3415 44.116 44.1119C41.8992 44.3053 39.6527 44.4095 37.3913 44.4095C35.1448 44.4095 32.8983 44.3053 30.6965 44.1268C29.4616 42.3564 28.2565 40.4669 27.0961 38.4733C25.9654 36.5244 24.9388 34.5457 24.0016 32.5521C24.924 30.5585 25.9654 28.5649 27.0812 26.6159C28.2417 24.6075 29.4319 22.7031 30.6667 20.9327C32.8835 20.7393 35.13 20.6352 37.3913 20.6352C39.6379 20.6352 41.8844 20.7393 44.0862 20.9178C45.3211 22.6883 46.5262 24.5777 47.6866 26.5713C48.8173 28.5203 49.8439 30.499 50.7811 32.4926C49.8439 34.4862 48.8173 36.4797 47.7015 38.4287ZM52.5069 36.4946C53.3103 38.4882 53.9947 40.4818 54.56 42.4159C52.6111 42.892 50.558 43.2937 48.4305 43.6061C49.1595 42.4605 49.8885 41.2852 50.5729 40.0801C51.2572 38.8899 51.897 37.6848 52.5069 36.4946ZM37.4211 52.369C36.0375 50.9407 34.6539 49.3488 33.2851 47.6081C34.6241 47.6677 35.9929 47.7123 37.3765 47.7123C38.775 47.7123 40.1586 47.6825 41.5124 47.6081C40.1734 49.3488 38.7898 50.9407 37.4211 52.369ZM26.3522 43.6061C24.2396 43.2937 22.2014 42.9068 20.2524 42.4308C20.8029 40.5116 21.4873 38.5328 22.2609 36.5541C22.8709 37.7443 23.5106 38.9345 24.2098 40.1247C24.9091 41.3149 25.6232 42.4754 26.3522 43.6061ZM37.3467 12.6459C38.7303 14.0742 40.1139 15.6661 41.4827 17.4067C40.1437 17.3472 38.775 17.3026 37.3913 17.3026C35.9929 17.3026 34.6092 17.3323 33.2554 17.4067C34.5944 15.6661 35.978 14.0742 37.3467 12.6459ZM26.3373 21.4088C25.6083 22.5544 24.8793 23.7297 24.195 24.9348C23.5106 26.125 22.8709 27.3152 22.2609 28.5054C21.4575 26.5118 20.7731 24.5182 20.2078 22.5841C22.1567 22.1229 24.2098 21.7212 26.3373 21.4088ZM12.8732 40.0355C7.6065 37.789 4.19954 34.8432 4.19954 32.5074C4.19954 30.1717 7.6065 27.211 12.8732 24.9794C14.1526 24.4289 15.5511 23.938 16.9942 23.4768C17.8423 26.3928 18.9581 29.4278 20.3417 32.5372C18.9729 35.6317 17.872 38.6519 17.0389 41.553C15.566 41.0918 14.1675 40.5859 12.8732 40.0355ZM20.8773 61.2955C18.8539 60.135 17.9762 55.7164 18.6605 50.0332C18.8242 48.6347 19.092 47.1618 19.4193 45.6592C22.3353 46.3733 25.5191 46.9238 28.8665 47.2808C30.875 50.0332 32.9578 52.5326 35.0556 54.7196C30.2055 59.2275 25.653 61.6972 22.5584 61.6972C21.8889 61.6823 21.3236 61.5484 20.8773 61.2955ZM56.1668 49.9588C56.8661 55.642 56.0032 60.0607 53.9947 61.236C53.5484 61.5038 52.9681 61.6228 52.2838 61.6228C49.2041 61.6228 44.6367 59.168 39.7866 54.6899C41.8695 52.5029 43.9523 50.0183 45.9311 47.266C49.2934 46.9089 52.4772 46.3584 55.3932 45.6294C55.7354 47.1321 56.0032 48.5752 56.1668 49.9588ZM61.8947 40.0355C60.6152 40.5859 59.2167 41.0769 57.7736 41.5381C56.9256 38.6221 55.8097 35.5871 54.4261 32.4777C55.7949 29.3832 56.8958 26.363 57.729 23.4619C59.2018 23.9231 60.6003 24.4289 61.9095 24.9794C67.1762 27.2259 70.5831 30.1717 70.5831 32.5074C70.5683 34.8432 67.1613 37.8038 61.8947 40.0355Z"
      fill="#61DAFB"
    />
    <path
      d="M37.3765 39.3066C41.1315 39.3066 44.1755 36.2625 44.1755 32.5075C44.1755 28.7525 41.1315 25.7085 37.3765 25.7085C33.6215 25.7085 30.5775 28.7525 30.5775 32.5075C30.5775 36.2625 33.6215 39.3066 37.3765 39.3066Z"
      fill="#61DAFB"
    />
  </svg>
);

const LogoVue = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="65" viewBox="0 0 75 65">
    <path
      d="M46.1577 0.000304382L37.4977 15.0111L28.8376 0.000304382H-0.00140381L37.4977 64.9996L74.9967 0.000304382H46.1577Z"
      fill="#41B883"
    />
    <path
      d="M46.1577 0.000312635L37.4977 15.0111L28.8377 0.000312635H14.9982L37.4977 38.9991L59.9971 0.000312635H46.1577Z"
      fill="#34495E"
    />
  </svg>
);

const LogoHTML = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="65" viewBox="0 0 58 65" fill="none">
    <path d="M5.22129 58.5221L0 0H57.4026L52.1813 58.4905L28.6538 65" fill="#E44D26" />
    <path d="M28.7013 59.9351V4.22083H52.3377L47.8271 54.5948" fill="#F16529" />
    <path
      d="M10.974 11.8182H28.7013V19.1167H18.718L19.3711 26.5921H28.7013V33.8745H12.9022L10.974 11.8182ZM13.2132 37.5398H20.3041L20.8017 43.3754L28.7013 45.5618V53.1818L14.2084 49.002"
      fill="#EBEBEB"
    />
    <path
      d="M46.4286 11.8182H28.7013V19.1224H45.7743L46.4286 11.8182ZM45.1356 26.6035H28.7013V33.9077H37.4247L36.5991 43.4L28.7013 45.588V53.1818L43.1884 49.031"
      fill="white"
    />
  </svg>
);

const LogoCSS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="65" viewBox="0 0 58 65" fill="none">
    <path d="M57.6261 0L52.4047 58.4932L28.9341 65L5.52827 58.5024L0.312378 0H57.6261Z" fill="#264DE4" />
    <path d="M47.9345 54.7686L52.3966 4.78345H28.9692V60.0265L47.9345 54.7686Z" fill="#2965F1" />
    <path d="M12.2697 26.4811L12.9127 33.6561H28.9692V26.4811H12.2697Z" fill="#EBEBEB" />
    <path d="M28.9693 11.9586H28.9445H10.9776L11.6298 19.1338H28.9693V11.9586Z" fill="#EBEBEB" />
    <path
      d="M28.9692 52.5807V45.1156L28.9377 45.1239L20.9468 42.9662L20.436 37.2438H16.553H13.2333L14.2386 48.5097L28.9362 52.5898L28.9692 52.5807Z"
      fill="#EBEBEB"
    />
    <path
      d="M37.7797 33.6561L36.9469 42.9617L28.9444 45.1216V52.5864L43.6537 48.5097L43.7616 47.2975L45.4477 28.4079L45.6227 26.4812L46.9181 11.9586H28.9444V19.1338H39.0548L38.4019 26.4812H28.9444V33.6561H37.7797Z"
      fill="white"
    />
  </svg>
);

const LogoModulz = () => (
  <svg width="80" height="80" viewBox="0 0 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 26.5L4 31V22L10 26.5Z"></path>
    <path d="M10 14.5L4 19V10L10 14.5Z"></path>
    <path d="M17 8.5L11 13V4L17 8.5Z"></path>
    <path d="M24 14.5L18 19V10L24 14.5Z"></path>
    <path d="M31 8.5L25 13V4L31 8.5Z"></path>
    <path d="M31 20.5L25 25V16L31 20.5Z"></path>
    <path d="M10 25L4 20.5L10 16V25Z"></path>
    <path d="M17 19L11 14.5L17 10V19Z"></path>
    <path d="M10 13L4 8.5L10 4V13Z"></path>
    <path d="M24 13L18 8.5L24 4V13Z"></path>
    <path d="M31 19L25 14.5L31 10V19Z"></path>
    <path d="M31 31L25 26.5L31 22V31Z"></path>
  </svg>
);

const LogoFramer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="65" viewBox="0 0 43 65" fill="none">
    <path
      d="M0 43.3333H21.5V65L0 43.3333ZM0 21.6667H21.5L43 43.3333H0V21.6667ZM0 0H43V21.6667H21.5L0 0Z"
      fill="black"
    />
  </svg>
);

const LogoSketch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="65" viewBox="0 0 72 65" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6718 2.14007L35.9144 0L56.1571 2.14007L71.8289 23.178L35.9144 65L0 23.178L15.6718 2.14007Z"
      fill="#FDB300"
    />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5471 23.178L35.9145 65L0 23.178H14.5471Z" fill="#EA6C00" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M57.2817 23.178L35.9144 65L71.8289 23.178H57.2817Z"
      fill="#EA6C00"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5471 23.178H57.2818L35.9144 65L14.5471 23.178Z"
      fill="#FDAD00"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M35.9144 0L15.6717 2.14004L14.5471 23.178L35.9144 0Z"
      fill="#FDD231"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M35.9144 0L56.1571 2.14004L57.2817 23.178L35.9144 0Z"
      fill="#FDD231"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M71.829 23.1781L56.1571 2.14014L57.2818 23.1781H71.829Z"
      fill="#FDAD00"
    />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 23.1781L15.6717 2.14014L14.5471 23.1781H0Z" fill="#FDAD00" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.9144 0L14.5471 23.178H57.2818L35.9144 0Z" fill="#FEEEB7" />
  </svg>
);

const LogoFigma = () => (
  <svg width="43" height="65" viewBox="0 0 43 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <path
        d="M21.5 32.5C21.5 29.6268 22.6326 26.8713 24.6486 24.8396C26.6646 22.808 29.3989 21.6666 32.25 21.6666C35.1011 21.6666 37.8354 22.808 39.8514 24.8396C41.8674 26.8713 43 29.6268 43 32.5C43 35.3731 41.8674 38.1286 39.8514 40.1603C37.8354 42.1919 35.1011 43.3333 32.25 43.3333C29.3989 43.3333 26.6646 42.1919 24.6486 40.1603C22.6326 38.1286 21.5 35.3731 21.5 32.5V32.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 54.1667C0 51.2935 1.13259 48.538 3.1486 46.5064C5.16462 44.4747 7.89892 43.3334 10.75 43.3334H21.5V54.1667C21.5 57.0399 20.3674 59.7954 18.3514 61.827C16.3354 63.8587 13.6011 65 10.75 65C7.89892 65 5.16462 63.8587 3.1486 61.827C1.13259 59.7954 0 57.0399 0 54.1667H0Z"
        fill="#0ACF83"
      />
      <path
        d="M21.5 0V21.6667H32.25C35.1011 21.6667 37.8354 20.5253 39.8514 18.4937C41.8674 16.462 43 13.7065 43 10.8333C43 7.96015 41.8674 5.20465 39.8514 3.17301C37.8354 1.14137 35.1011 0 32.25 0L21.5 0Z"
        fill="#FF7262"
      />
      <path
        d="M0 10.8333C0 13.7065 1.13259 16.462 3.1486 18.4937C5.16462 20.5253 7.89892 21.6667 10.75 21.6667H21.5V0H10.75C7.89892 0 5.16462 1.14137 3.1486 3.17301C1.13259 5.20465 0 7.96015 0 10.8333H0Z"
        fill="#F24E1E"
      />
      <path
        d="M0 32.5C0 35.3731 1.13259 38.1286 3.1486 40.1603C5.16462 42.1919 7.89892 43.3333 10.75 43.3333H21.5V21.6666H10.75C7.89892 21.6666 5.16462 22.808 3.1486 24.8396C1.13259 26.8713 0 29.6268 0 32.5H0Z"
        fill="#A259FF"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="43" height="65" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LogoXd = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="65" viewBox="0 0 66 65" fill="none">
    <path
      d="M54.3125 65H11.6875C5.225 65 0 59.7222 0 53.1944V11.8056C0 5.27778 5.225 0 11.6875 0H54.3125C60.775 0 66 5.27778 66 11.8056V53.1944C66 59.7222 60.775 65 54.3125 65Z"
      fill="#FF26BE"
    />
    <path
      d="M53.2675 62.2222H12.7325C7.2325 62.2222 2.75 57.6944 2.75 52.1389V12.8611C2.75 7.30555 7.2325 2.77777 12.7325 2.77777H53.24C58.7675 2.77777 63.2225 7.30555 63.2225 12.8611V52.1111C63.25 57.6944 58.7675 62.2222 53.2675 62.2222Z"
      fill="#2E001F"
    />
    <path
      d="M26.0975 30.4167L33.7975 45.3611C33.935 45.5833 33.8525 45.8055 33.6325 45.8055H28.8475C28.545 45.8055 28.4075 45.7222 28.27 45.4444C26.51 41.7778 24.7225 38.1111 22.88 34.1667H22.825C21.175 37.8889 19.36 41.8055 17.6 45.4722C17.4625 45.6944 17.325 45.7778 17.105 45.7778H12.5675C12.2925 45.7778 12.265 45.5555 12.4025 45.3889L19.9375 30.8889L12.65 16.2222C12.485 16 12.65 15.8333 12.815 15.8333H17.545C17.82 15.8333 17.93 15.8889 18.04 16.1389C19.7725 19.8055 21.5325 23.5833 23.1825 27.2778H23.2375C24.8325 23.6111 26.5925 19.8055 28.2975 16.1667C28.435 15.9444 28.5175 15.8055 28.7925 15.8055H33.22C33.44 15.8055 33.5225 15.9722 33.385 16.1944L26.0975 30.4167ZM35.145 34.9444C35.145 28.4722 39.4075 23.4167 46.1725 23.4167C46.75 23.4167 47.0525 23.4167 47.6025 23.4722V16.1111C47.6025 15.9444 47.74 15.8333 47.8775 15.8333H52.2225C52.4425 15.8333 52.4975 15.9167 52.4975 16.0555V41.5555C52.4975 42.3055 52.4975 43.25 52.635 44.2778C52.635 44.4444 52.58 44.5 52.415 44.5833C50.105 45.6944 47.685 46.1944 45.375 46.1944C39.4075 46.2222 35.145 42.5 35.145 34.9444ZM47.6025 27.8333C47.2175 27.6667 46.6675 27.5555 46.0075 27.5555C42.5425 27.5555 40.1225 30.25 40.1225 34.7222C40.1225 39.8333 42.5975 41.8889 45.705 41.8889C46.365 41.8889 47.08 41.8055 47.6025 41.5833V27.8333Z"
      fill="#FFD9F2"
    />
  </svg>
);
