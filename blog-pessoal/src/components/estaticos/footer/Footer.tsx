import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

// import purple from '@material-ui/core/colors/purple';

// const roxin = purple[500];

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className='box1'>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className='textos'
              >
                Siga-me nas redes sociais{' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.instagram.com/oeste.prado/"
                target="_blank"
              >
                <InstagramIcon className='redes'/>
              </a>
              <a
                href="https://www.linkedin.com/in/wessslima/"
                target="_blank"
              >
                <LinkedInIcon className='redes'/>
              </a>
            </Box>
          </Box>
          <Box className='box2'>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className='textos'
              >
                © 2022 Copyright
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://github.com/Wessslima">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className='textos'
                  align="center"
                >
                 WEST
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;