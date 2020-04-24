import React from 'react';
import { Box } from '@modulz/radix';

export const Cursor = (props: any) => (
  <Box {...props} className="cursor" sx={{ width: 25, height: 25, position: 'absolute', top: 0, left: 0, ...props.sx }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none">
      <g filter="url(#filter0_d)">
        <path d="M7.5 23.186L4.794.5l18.294 13.687-9.544 1.468L7.5 23.186z" fill="#000" />
        <path
          d="M7.5 23.186L4.794.5l18.294 13.687-9.544 1.468L7.5 23.186z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
        <filter
          id="filter0_d"
          x="-5.683"
          y="-5.683"
          width="31.454"
          height="32.553"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  </Box>
);
