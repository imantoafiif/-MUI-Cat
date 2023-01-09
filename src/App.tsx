import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import CustomTable from './components/CustomTable';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { ThemeOptions, Typography } from '@mui/material';
import CustomTabs from './components/CustomTabs';
import CustomCard from './components/CustomCard';

interface content {
  value: string,
  element: JSX.Element
}

const App = () => {

  const contents:ReadonlyArray<content> = [
    { 
      value: 'Breeds', 
      element: <CustomTable 
        url={
          {url: 'breeds', params: { page: 1 }}
        }
        headers={['Breed', 'Country', 'Origin', 'Coat', 'Pattern']}
        datas={['breed', 'country', 'origin', 'coat', 'pattern']}
        title="Breeds"
      /> 
    },
    { 
      value: 'Facts', 
      element: <CustomTable 
        url={
          {url: 'facts', params: { page: 1 }}
        }
        headers={['Facts']}
        datas={['fact']}
        show_header={false}
        title="Facts"
      /> 
    },
    { 
      value: 'Random', 
      element: <CustomCard /> 
    }
  ]
  const [tab, setTabs] = useState<string>(contents[0].value)
  const theme:ThemeOptions | undefined = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <Navbar title="Cats"/>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
          }}
        >
        <Container component="main" maxWidth="lg">
          <CustomTabs 
            tabs={contents.map(item => item.value)} 
            value={tab}
            color="primary" 
            setTabs={setTabs}/>
        </Container>
      </Box>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 6,
          }}
        >
        {
          contents.map((item:content) => (
            <Container
              key={item.value}
              style={{ display: (tab == item.value ? 'inherit' : 'none'), width: '70%' }}
              component="main" maxWidth="lg">
              {item.element}
            </Container>
          ))
        }
      </Box>
    </ThemeProvider>
  )

}

export default App
