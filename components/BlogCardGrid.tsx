import React from 'react';
import { Grid } from '@modulz/radix';

export const BlogCardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)'],
        gap: 5,
        '& ul': { listStyle: 'none', margin: 0, padding: 0 },
      }}
    >
      {children}
    </Grid>
  );
};
