import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BoxContainer } from './loader.styled';

export default function LoaderComponent() {
  return (
    <BoxContainer sx={{ display: 'flex' }}>
      <CircularProgress />
    </BoxContainer>
  );
}