import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function MainPage() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valueOnePage = () => {
    return(
        <div>
            Gaderie les amis et amies d'Emmanuel...
        </div>
    )
  }
  const valueTwoPage = () => {
    return(
        <div>
            Le meilleur endroit pour préparer votre enfant à ses études primaires et lui apprendre les bases de la vie sociale
        </div>
    )
  }
  const valueThreePage = () => {
    return(
        <div>
            La garderie les amis et amies d'Emmanuel est dirigé par Jonathan Muteba
        </div>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="Page d'accueil" />
      <Tab value="two" label="Nos services" />
      <Tab value="three" label="Qui sommes nous?" />
    </Tabs>
    {
        value == "one" && valueOnePage()
    }
    {
        value == "two" && valueTwoPage()
    }
    {
        value == "three" && valueThreePage()
    }
  </Box>
  );
}