import React from 'react';
import { gsap } from 'gsap';
import { Flex, Box } from '@modulz/radix';

type LooperProps = { children: React.ReactNode };

export const Looper = ({ children, ...props }: LooperProps) => {
  const viewRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const view = viewRef.current;
    const viewWidth = view.clientWidth;

    const wrapper = wrapperRef.current;
    const wrapperHeight = wrapper.clientHeight;
    const items: HTMLElement[] = Array.from(wrapper.querySelectorAll('.box'));

    if (items.length === 0) {
      return null;
    }

    const itemsRects = items.map((x) => x.getBoundingClientRect());
    const totalItemsWidth = itemsRects[itemsRects.length - 1].right;

    items.forEach((item, index) => {
      gsap.set(item, { x: itemsRects[index].left, left: -viewWidth / 2 });
      item.style.position = 'absolute';
    });

    wrapper.style.height = `${wrapperHeight + 440}px`;
    wrapper.style.width = `${totalItemsWidth}px`;

    gsap.from('.box', {
      duration: 15,
      ease: 'none',
      // paused: true,
      x: '+=' + totalItemsWidth,
      modifiers: {
        x: gsap.utils.unitize((x: string) => parseFloat(x) % totalItemsWidth),
      },

      repeat: -1,
    });
  }, [viewRef, wrapperRef]);

  return (
    <Box
      ref={viewRef}
      sx={{
        width: '100vw',
        mx: 'auto',
        overflow: 'hidden',
      }}
    >
      <Flex
        ref={wrapperRef}
        sx={{
          width: 'max-content',
          alignItems: 'center',
          userSelect: 'none',
          position: 'relative',
        }}
      >
        {React.Children.map(children, (child) => (
          <Box px={4} className="box">
            {child}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
