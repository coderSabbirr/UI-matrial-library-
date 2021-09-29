import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const[articles,setArticles]=useState([])
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=0c666712e16c4871abee28e716bb8375')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    console.log(articles);
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          articles.map(article => <Grid item xs={2} sm={4} md={4} >
    
            <News article={article}></News>
            </Grid>)
         
        }
      </Grid>
    </Box>
    );
};

export default Newspaper;