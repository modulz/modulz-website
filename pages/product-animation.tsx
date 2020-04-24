import React from 'react';
import { gsap } from 'gsap';
import { Container, Box, AspectRatio, Flex, Divider } from '@modulz/radix';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { Cursor } from '../components/Cursor';

const Editor = () => {
  const tl = gsap.timeline({ delay: 0.3, defaults: { ease: 'expo' } });

  const modulz = React.useRef(null);
  const vscode = React.useRef(null);
  const styleguide = React.useRef(null);

  React.useEffect(() => {
    const sidebarItems = modulz.current.querySelectorAll('.sidebar > *');
    const panels = modulz.current.querySelector('.panels');
    const cursor = modulz.current.querySelector('.cursor');
    const action1 = modulz.current.querySelector('.action1');
    const action2 = modulz.current.querySelector('.action2');
    const action3 = modulz.current.querySelector('.action3');
    const action4 = modulz.current.querySelector('.action4');

    const code1 = vscode.current.querySelectorAll('.code1 > *');
    const code2 = vscode.current.querySelectorAll('.code2 > *');
    const code3 = vscode.current.querySelectorAll('.code3 > *');
    const code4 = vscode.current.querySelectorAll('.code4 > *');

    gsap.set([code1, code2, code3, code4], { opacity: 0 });

    tl.to(vscode.current, 0.3, {
      yPercent: 50,
      opacity: 1,
    });

    tl.to(
      cursor,
      0.5,
      {
        y: action1.offsetTop - action1.clientHeight - 5,
        x: action1.offsetLeft + action1.clientWidth / 3,
      },
      '+=0.5'
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

    tl.to('.button .gradient', 0.5, {
      opacity: 1,
    });

    tl.to(code1, 0.3, {
      opacity: 1,
      stagger: 0.1,
    });

    tl.to(cursor, 0.5, {
      y: action2.offsetTop - action2.clientHeight - 5,
      x: action2.offsetLeft + action2.clientWidth / 3,
    });

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

    tl.to('.button', 0.5, {
      color: 'white',
    });

    tl.to(code2, 0.3, {
      opacity: 1,
      stagger: 0.1,
    });

    tl.to(cursor, 0.5, {
      y: action3.offsetTop + 25 - action3.clientHeight - 5,
      x: action3.offsetLeft + action3.clientWidth / 3,
    });

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

    tl.to('.button', 0.5, {
      height: 80,
      paddingLeft: 50,
      paddingRight: 50,
    });

    tl.to(code3, 0.3, {
      opacity: 1,
      stagger: 0.1,
    });

    tl.to(cursor, 0.5, {
      y: action4.offsetTop + 25 - action4.clientHeight - 5,
      x: action4.offsetLeft + action4.clientWidth / 3,
    });

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

    tl.to('.button', 0.5, {
      borderRadius: 50,
    });

    tl.to(code4, 0.3, {
      opacity: 1,
      stagger: 0.1,
    });

    // STYLEGUIDE EDITOR SCENE

    tl.to(styleguide.current, 0.4, {
      delay: 1,
      yPercent: 50,
      opacity: 1,
    });
  }, []);

  return (
    <Box>
      <TitleAndMetaTags />

      <Container sx={{ maxWidth: 'fit-content' }}>
        <Box ref={modulz} sx={{ position: 'relative', zIndex: 3 }}>
          <EditorIllustration />
        </Box>
        <Box ref={vscode} sx={{ position: 'relative', zIndex: 2, transform: 'translateY(-100%)', opacity: 0 }}>
          <TextEditorIllustration />
        </Box>
        <Box ref={styleguide} sx={{ position: 'relative', zIndex: 1, transform: 'translateY(-150%)', opacity: 0 }}>
          <StyleguideIllustration />
        </Box>
      </Container>
    </Box>
  );
};

export default Editor;

const EditorIllustration = () => {
  return (
    <AspectRatio className="editor" ratio="16:9" sx={{ width: 1000 }}>
      <Flex
        sx={{
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '10px',
          transform: 'perspective(110em) rotateX(60deg)',
          overflow: 'hidden',
          boxShadow: 'rgba(22, 31, 39, 0.42) 0px 60px 123px -25px, rgba(19, 26, 32, 0.08) 0px 35px 75px -35px',
        }}
      >
        <Box className="sidebar" p={3} sx={{ width: '200px', borderRight: '1px solid', borderColor: 'gray300' }}>
          <SkeletonLine mb={3} width="20%" />
          <SkeletonLine mb={3} ml="25px" width="20%" />
          <SkeletonLine mb={3} ml="50px" width="20%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="25px" width="20%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
        </Box>

        <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1, position: 'relative' }}>
          <Flex
            className="button"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              height: '60px',
              px: '30px',
              backgroundImage: (theme) => `linear-gradient(${theme.colors.gray300}, ${theme.colors.gray300})`,
              position: 'relative',
              border: '0 solid hsl(240,80%,60%)',
              color: 'gray700',
            }}
          >
            <Box
              className="gradient"
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                opacity: 0,
                backgroundImage: 'linear-gradient(hsl(240,90%,84%), hsl(240,90%,70%))',
                zIndex: 1,
              }}
            />
            <SkeletonLine color="currentColor" width="80px" sx={{ position: 'relative', zIndex: 2 }} />
          </Flex>
        </Flex>

        <Box className="panels" p="3" sx={{ width: '200px', borderLeft: '1px solid', borderColor: 'gray300' }}>
          <SkeletonLine mb="3" color="gray900" width="50px" />
          <SkeletonRow mb="3" />
          <SkeletonRow mb="3" />
          <SkeletonRow mb="3" className="action1" />

          <Divider mb={3} mx={-3} />

          <SkeletonLine mb="3" color="gray900" width="50px" />
          <SkeletonRow mb="3" />
          <SkeletonRow mb="3" className="action2" />
          <SkeletonRow mb="3" />

          <Divider mb={3} mx={-3} />

          <SkeletonLine mb="3" color="gray900" width="50px" />
          <SkeletonRow mb="3" />
          <SkeletonRow mb="3" />
          <SkeletonRow mb="3" className="action3" />

          <Divider mb={3} mx={-3} />

          <SkeletonLine mb="3" color="gray900" width="50px" />
          <SkeletonRow mb="3" />
          <SkeletonRow mb="3" className="action4" />
        </Box>
        <Cursor />
      </Flex>
    </AspectRatio>
  );
};

export const TextEditorIllustration = () => {
  return (
    <AspectRatio className="editor" ratio="16:9" sx={{ width: 1000 }}>
      <Flex
        sx={{
          backgroundColor: '#002b36',
          height: '100%',
          borderRadius: '10px',
          transform: 'perspective(110em) rotateX(60deg)',
          overflow: 'hidden',
          boxShadow: 'rgba(22, 31, 39, 0.42) 0px 60px 123px -25px, rgba(19, 26, 32, 0.08) 0px 35px 75px -35px',
        }}
      >
        <Box
          px={2}
          sx={{ width: '35px', backgroundColor: 'hsl(192, 95%, 10%)', borderRight: '1px solid hsl(192, 100%, 7%)' }}
        >
          <SkeletonCircle my={2} />
          <SkeletonCircle my={2} />
          <SkeletonCircle my={2} />
          <SkeletonCircle my={2} />
          <SkeletonCircle my={2} />
        </Box>

        <Box
          className="sidebar"
          p={3}
          sx={{ width: '200px', borderRight: '1px solid', borderColor: 'hsl(192, 100%, 7%)' }}
        >
          <SkeletonLine mb={3} width="20%" color="#586e75" />
          <SkeletonLine mb={3} ml="25px" width="20%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="20%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="60%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="60%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="25px" width="20%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="60%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="60%" color="#586e75" />
          <SkeletonLine mb={3} ml="50px" width="40%" color="#586e75" />
        </Box>
        <Box px={1} py={3} sx={{ flexGrow: 1 }}>
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} />
          <SkeletonCode mb={2} className="code1" />
          <SkeletonCode mb={2} className="code2" />
          <SkeletonCode mb={2} className="code3" />
          <SkeletonCode mb={2} className="code4" />
        </Box>
        <Box sx={{ width: '120px' }}>
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#6c71c4', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#268bd2', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#2aa198', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#859900', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#6c71c4', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#268bd2', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#2aa198', height: '2px' }} />
          <SkeletonLine mb={1} width={randomWidth(20, 50)} sx={{ backgroundColor: '#859900', height: '2px' }} />
        </Box>
      </Flex>
    </AspectRatio>
  );
};

const StyleguideIllustration = () => {
  return (
    <AspectRatio className="visual-editor" ratio="16:9" sx={{ width: 1000 }}>
      <Flex
        sx={{
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '10px',
          transform: 'perspective(110em) rotateX(60deg)',
          overflow: 'hidden',
          boxShadow: 'rgba(22, 31, 39, 0.42) 0px 60px 123px -25px, rgba(19, 26, 32, 0.08) 0px 35px 75px -35px',
        }}
      >
        <Box className="sidebar" p={3} sx={{ width: '200px', borderRight: '1px solid', borderColor: 'gray300' }}>
          <SkeletonLine mb={3} width="20%" />
          <SkeletonLine mb={3} ml="25px" width="20%" />
          <SkeletonLine mb={3} ml="50px" width="20%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="25px" width="20%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="60%" />
          <SkeletonLine mb={3} ml="50px" width="40%" />
        </Box>

        <Box pt="60px" pl="60px" sx={{ flexGrow: 1, position: 'relative' }}>
          <SkeletonLine mb={3} width="50%" color="gray900" />
          <SkeletonLine mb={3} width="50%" />
          <SkeletonLine mb={3} width="30%" />
          <SkeletonLine mb={3} width="30%" />
          <SkeletonLine width="20%" />
          <Flex
            className="button"
            my={7}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              height: '60px',
              px: '30px',
              backgroundImage: (theme) => `linear-gradient(${theme.colors.gray300}, ${theme.colors.gray300})`,
              position: 'relative',
              border: '0 solid hsl(240,80%,60%)',
              color: 'gray700',
            }}
          >
            <Box
              className="gradient"
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                opacity: 0,
                backgroundImage: 'linear-gradient(hsl(240,90%,84%), hsl(240,90%,70%))',
                zIndex: 1,
              }}
            />
            <SkeletonLine color="currentColor" width="80px" sx={{ position: 'relative', zIndex: 2 }} />
          </Flex>
          <SkeletonLine mb={3} width="50%" />
          <SkeletonLine mb={3} width="30%" />
          <SkeletonLine mb={3} width="30%" />
          <SkeletonLine mb={3} width="20%" />
        </Box>
      </Flex>
    </AspectRatio>
  );
};

const randomWidth = (min = 0, max = 10) => `${gsap.utils.random(min, max)}%`;

const SkeletonLine = ({ width, color = 'gray600', ...props }: any) => (
  <Box
    {...props}
    sx={{
      height: 1,
      borderRadius: '9999px',
      backgroundColor: color,
      width,
      ...props.sx,
    }}
  />
);

const SkeletonButton = ({ width, color = 'gray300', ...props }: any) => (
  <Box {...props} sx={{ backgroundColor: color, width, height: '15px', borderRadius: '3px' }}></Box>
);

const SkeletonRow = ({ className, ...props }: any) => (
  <Flex {...props} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
    <SkeletonLine width="20%" />
    <SkeletonButton width="50%" className={className} />
  </Flex>
);

const SkeletonCode = (props) => {
  return (
    <Flex {...props} sx={{ alignItems: 'center' }}>
      <Box mr="3px" sx={{ backgroundColor: '#073642', height: 2, width: 2 }} />
      <SkeletonLine mx="3px" color="#586e75" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
      <SkeletonLine mx="3px" color="#268bd2" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
      <SkeletonLine mx="3px" color="#d33682" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
      <SkeletonLine mx="3px" color="#2aa198" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
      <SkeletonLine mx="3px" color="#b58900" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
      <SkeletonLine mx="3px" color="#268bd2" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
      <SkeletonLine mx="3px" color="#586e75" width={`${gsap.utils.random(['2', '5', '7', '10', '13'])}%`} />
    </Flex>
  );
};

const SkeletonCircle = (props) => (
  <AspectRatio {...props}>
    <Box sx={{ backgroundColor: '#073642', height: '100%', borderRadius: '50%' }}></Box>
  </AspectRatio>
);

// tl.set('.visual-editor', { opacity: 1, yPercent: 50 });
// tl.set('.text-editor', { opacity: 0, yPercent: -50 });
// const cursorEl = document.querySelector('.visual-editor .cursor');
// const cursorRect = cursorEl && cursorEl.getBoundingClientRect();
// const action1El = document.querySelector('.visual-editor .action1');
// const action1Rect = action1El && action1El.getBoundingClientRect();
// console.log(cursorRect);
// console.log(action1Rect);
// tl.from('.visual-editor .sidebar > div', {
//   // delay: 0.5,
//   duration: 1,
//   ease: 'back',
//   opacity: 0,
//   y: -10,
//   stagger: 0.025,
// });
// tl.to('.visual-editor', {
//   duration: 0.5,
//   yPercent: 20,
//   ease: 'back',
// });
// tl.to('.text-editor', {
//   duration: 0.5,
//   yPercent: -20,
//   opacity: 1,
//   ease: 'back',
//   delay: '-0.5',
// });
// tl.to('.visual-editor .cursor', {
//   x: action1Rect.x - cursorRect.x + window.scrollX,
//   y: cursorRect.y - action1Rect.y,
// });
// tl.to('.visual-editor .button .gradient', {
//   delay: 1,
//   duration: 0.5,
//   opacity: 1,
//   ease: 'back',
// });
// tl.to('.visual-editor .button', {
//   duration: 0.5,
//   borderRadius: 25,
// });
// tl.to('.visual-editor .button', {
//   duration: 0.2,
//   ease: 'easeOut',
//   height: theme.sizes[6],
// });
// tl.to('.visual-editor .button', {
//   delay: '0.2',
//   duration: 0.2,
//   ease: 'easeOut',
//   paddingLeft: theme.space[3],
//   paddingRight: theme.space[3],
// });
// tl.to('.visual-editor .button', {
//   duration: 0,
//   borderWidth: '1px',
// });
// tl.to('.visual-editor .button', {
//   duration: 0.5,
//   boxShadow: '0 2px 5px rgba(0,0,0,.1)',
// });
// tl.set('.sidebar > div', { opacity: 0, y: -10 });
// tl.from('.visual-editor', {
//   delay: 0.3,
//   duration: 1,
//   ease: 'back',
//   opacity: 0,
//   y: -100,
// });
// tl.from('.text-editor', {
//   delay: 0.3,
//   duration: 1,
//   ease: 'back',
//   opacity: 0,
//   y: -100,
// });
