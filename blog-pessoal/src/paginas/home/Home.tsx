import { Box, Button, Grid, Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';

function Home() {
  return (
    <>
      <Grid 
      container 
      direction="row" 
      justifyContent="center" 
      alignItems="center" 
      className='bg-Home'>

          <Grid alignItems="center" item xs={6}>

            <Box paddingX={20} >

              <Typography 
              variant="h3" 
              gutterBottom 
              color="textPrimary" 
              component="h3" 
              align="center" 
              className='welcome'>WELCOME
              </Typography>

              <Typography 
              variant="h5" 
              gutterBottom 
              color="textPrimary" 
              component="h5" 
              align="center" 
              className='welcome'>Qual a boa?
              </Typography>

            </Box>

              <Box display="flex" justifyContent="center">

                <Box marginRight={1}>

                <Button type="submit" variant='outlined' color="secondary">
                  Ver Postagens
                </Button>

                </Box>

              </Box>

              </Grid>

              <Grid item xs={6} className="logo"></Grid>

                <Grid 
                  container 
                  direction="row" 
                  justifyContent="center" 
                  alignItems="center" 
                  xs={12} >
              
                  <TabPostagem />

                </Grid>

          </Grid>
        </>
      );
    }

    export default Home;