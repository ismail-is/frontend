import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
  return (
    <div style={{margin:"350px"}}>
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://m.media-amazon.com/images/I/41av+vz+ppL._AC_UL600_FMwebp_QL65_.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TOMATO
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Fresh Tomato Hybrid, 1kg
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY</Button>
        <Button size="small">NEXT PRODUCT</Button>
      </CardActions>
    </Card>
  
        
    </div>
  )
}
