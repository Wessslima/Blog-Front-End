import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box, Grid } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {

    const [value, setValue] = useState('1')
    
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }


  return (
    <>
      <TabContext value={value}>

        <AppBar position="static">

          <Tabs centered indicatorColor="secondary" value={false} onChange={handleChange} className='tbPostagem'>
            <Tab className='sobre' label="Versions" value="1"/>
            <Tab className='sobre' label="Channel" value="2" />
          </Tabs>

        </AppBar>

        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>

        <TabPanel value="2">
          <Typography 
          variant="h5" 
          gutterBottom 
          color="textPrimary" 
          component="h5" 
          align="center" 
          className="titulo">WEST
          </Typography>


          <Typography 
          className='sobre'
          variant="body1" 
          gutterBottom 
          color="textPrimary" 
          align="justify">Time Lapse de 1 ano
          </Typography>

          <Grid container justifyContent="center">
          <iframe className='video'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/KVMwBlaqB5Y" 
                title="YouTube video player" 
                frameBorder="8" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            </Grid> 
        </TabPanel>

      </TabContext>
    </>
  );
}
export default TabPostagem;