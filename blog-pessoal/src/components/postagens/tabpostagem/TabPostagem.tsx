import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {

  const [value, setValue] = useState('1')

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>

        <AppBar className='tbPostagem' position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className='sobre' label="Todas as postagens" value="1" />
            <Tab className='sobre' label="Sobre" value="2" />
          </Tabs>
        </AppBar>


        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>

        <TabPanel value="2">

          <Typography
          className='sobre'
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center">WEST PRADO
          </Typography>


          <Typography
          className='sobre'
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify">Aquele que veio do oeste...
          </Typography>

        </TabPanel>

      </TabContext>
    </>
  );
}
export default TabPostagem;