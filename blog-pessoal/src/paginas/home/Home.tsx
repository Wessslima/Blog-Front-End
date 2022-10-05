import { Box, Button, Grid, Typography } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>WELCOME</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Qual a boa?</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#8c1ab9", color: "white" }}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} className="logo">
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} style={{ backgroundColor: "black" }}>

          <TabPostagem />

        </Grid>

      </Grid>
    </>
  );
}

export default Home;