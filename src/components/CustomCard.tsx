import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useFetch from '../helpers/hooks/useFetch';
import { Skeleton } from '@mui/material';

const CustomCard = () => {

  const [ fact, fetching, exception, fetch ] = useFetch('/fact', {})
  
  const onFetch = () => {
    fetch({})
  }

  return (
    <Card 
      component={Paper}
      style={{ boxShadow: '0px 0px 15px 0px #dedede' }} 
      >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Random Cat Fact
        </Typography>
        {
          fetching ? 
          <Skeleton animation="wave"/> : 
          <Typography variant="h5" component="div">
            { fact && fact.data.fact}
          </Typography>
        }
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          onClick={onFetch} 
          size="small">I'm feeling lucky</Button>
      </CardActions>
    </Card>
  );

}

export default CustomCard;