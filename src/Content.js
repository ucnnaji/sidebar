import React from 'react';
import './App.css';
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Data from './Data.json';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



const Content = () => {
    return (

        <>
            
            <Container maxWidth="lg">
                {/*
        <Typography variant='h6' align='center' style={{ marginTop: "0px" }}>
          FEDGEN Research Repository
        </Typography> */}

                <Grid container spacing={4} style={{ marginTop: "0px"  }}>
                    {Data.map((result, index) => (

                        <Grid item xs={2} sm={4} ms={4} key={index}>

                            <CardMedia
                                component="img"
                                image={result.img}
                                sx={{ height: "200px", width: "345px" }}
                                alt="Machine learning"
                                style={{ borderRadius: "2px", objectFit: "center", display: "flex", marginLeft: "20px"}}
                            />


                            <Card sx={{ maxWidth: 360 }} style={{ marginLeft: "20px" }}>
                                <CardActionArea style={{ objectFit: "right" }}>

                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.Description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <Button size="small" variant="outlined">Share</Button>
                                    <Button size="small" variant="outlined" onClick={() => window.location.href=result.link}>Read Article</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}

                </Grid>
            </Container>
        </>
    )
}

export default Content