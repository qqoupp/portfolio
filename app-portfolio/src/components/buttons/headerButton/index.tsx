import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { title } from 'process';

const StyledButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiTypography-root': {
      border: '4px solid currentColor', // Border appears on hover
    },
  },
}));

interface ButtonBaseDemoProps {
  title: string;
  onClick: () => void;
}

export default function ButtonBaseDemo({ title, onClick }: ButtonBaseDemoProps) {
  

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      <StyledButton focusRipple onClick={onClick}>
        <Typography
          component="span"
          variant="h5"
          color="inherit"
          sx={(theme) => ({
            position: 'relative',
            p: 4,
            pt: 2,
            pb: `calc(${theme.spacing(1)} + 6px)`,
            color: theme.palette.common.black,
            transition: 'border 0.3s ease', // Smooth border animation
            
          })}
        >
          {title}
        </Typography>
      </StyledButton>
    </Box>
  );
}
