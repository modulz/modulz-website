import React from 'react';
import { AspectRatio, Flex, Box } from '@modulz/radix';

export const TextEditorIllustration = () => {
  return (
    <Box
      className="text-editor"
      sx={{
        width: ['325px', '325px', '718px', '718px', '1000px'],
        // marginTop: ['0', '0', '0', '0', '-240px'],
      }}
    >
      <AspectRatio ratio="16:9">
        <Box
          sx={{
            backgroundColor: '#002b36',
            height: '100%',
            borderRadius: ['5px', '10px'],
            transform: [
              'perspective(50em) rotateX(50deg)',
              'perspective(50em) rotateX(50deg)',
              'perspective(50em) rotateX(50deg)',
              'perspective(50em) rotateX(50deg)',
              'perspective(110em) rotateX(60deg)',
            ],
            overflow: 'hidden',
            boxShadow: 'rgba(22, 31, 39, 0.42) 0px 60px 123px -25px, rgba(19, 26, 32, 0.08) 0px 35px 75px -35px',
          }}
        >
          <Flex sx={{ height: '100%' }}>
            <Box
              sx={{ width: '35px', backgroundColor: 'hsl(192, 95%, 10%)', borderRight: '1px solid hsl(192, 100%, 7%)' }}
            >
              <Box padding={2}>
                <AspectRatio>
                  <Box sx={{ backgroundColor: '#073642', height: '100%', borderRadius: '50%' }}></Box>
                </AspectRatio>
              </Box>
              <Box padding={2}>
                <AspectRatio>
                  <Box sx={{ backgroundColor: '#073642', height: '100%', borderRadius: '50%' }}></Box>
                </AspectRatio>
              </Box>
              <Box padding={2}>
                <AspectRatio>
                  <Box sx={{ backgroundColor: '#073642', height: '100%', borderRadius: '50%' }}></Box>
                </AspectRatio>
              </Box>
              <Box padding={2}>
                <AspectRatio>
                  <Box sx={{ backgroundColor: '#073642', height: '100%', borderRadius: '50%' }}></Box>
                </AspectRatio>
              </Box>
              <Box padding={2}>
                <AspectRatio>
                  <Box sx={{ backgroundColor: '#073642', height: '100%', borderRadius: '50%' }}></Box>
                </AspectRatio>
              </Box>
            </Box>
            <Box
              className="sidebar"
              padding={2}
              sx={{ width: '20%', backgroundColor: 'hsl(192, 95%, 10%)', borderRight: '1px solid hsl(192, 100%, 7%)' }}
            >
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '20%',
                  marginLeft: '0',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '20%',
                  marginLeft: '25px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '20%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '60%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '33%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '25px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '25px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '25px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '25px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '25px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '50px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '75px',
                }}
              ></Box>
              <Box
                mb={3}
                sx={{
                  backgroundColor: '#586e75',
                  height: '5px',
                  borderRadius: '9999px',
                  width: '40%',
                  marginLeft: '75px',
                }}
              ></Box>
            </Box>
            <Box pl={1} sx={{ width: '15px', paddingTop: '12px' }}>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
              <AspectRatio mb={2}>
                <Box sx={{ backgroundColor: '#073642', height: '100%' }}></Box>
              </AspectRatio>
            </Box>
            <Box sx={{ flexGrow: 1, px: '1' }}>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '10%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#d33682', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Flex my={3}>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '5%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '3%' }}
                ></Box>
                <Box
                  mr={1}
                  sx={{ backgroundColor: '#586e75', height: '5px', borderRadius: '9999px', width: '2%' }}
                ></Box>
              </Flex>
              <Box
                my={3}
                sx={{ backgroundColor: '#cb4b16', height: '5px', borderRadius: '9999px', width: '25%' }}
              ></Box>
              <Box
                my={3}
                sx={{ backgroundColor: '#b58900', height: '5px', borderRadius: '9999px', width: '50%' }}
              ></Box>
              <Box
                my={3}
                sx={{ backgroundColor: '#dc322f', height: '5px', borderRadius: '9999px', width: '40%' }}
              ></Box>
              <Box
                my={3}
                sx={{ backgroundColor: '#6c71c4', height: '5px', borderRadius: '9999px', width: '30%' }}
              ></Box>
              <Box
                my={3}
                sx={{ backgroundColor: '#268bd2', height: '5px', borderRadius: '9999px', width: '20%' }}
              ></Box>
              <Box
                my={3}
                sx={{ backgroundColor: '#2aa198', height: '5px', borderRadius: '9999px', width: '25%' }}
              ></Box>
              <Box
                my={3}
                sx={{ backgroundColor: '#859900', height: '5px', borderRadius: '9999px', width: '20%' }}
              ></Box>
            </Box>
            <Box sx={{ width: '20%' }}>
              <Box mb={1} sx={{ backgroundColor: '#6c71c4', height: '2px', borderRadius: '9999px' }}></Box>
              <Box mb={1} sx={{ backgroundColor: '#268bd2', height: '2px', borderRadius: '9999px' }}></Box>
              <Box mb={1} sx={{ backgroundColor: '#2aa198', height: '2px', borderRadius: '9999px' }}></Box>
              <Box mb={1} sx={{ backgroundColor: '#859900', height: '2px', borderRadius: '9999px' }}></Box>
            </Box>
          </Flex>
        </Box>
      </AspectRatio>
    </Box>
  );
};
