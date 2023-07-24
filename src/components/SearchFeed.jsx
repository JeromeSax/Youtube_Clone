import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParam } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParam();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
     .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto',
    height: '90vh', flex: 2}}>
      <Typography variant="h4"
      fontWeight="bold" md={2} sx={{
      color: 'white' }}>
       Search Results for: <span style={{ color: '#F31503'}}
        >{searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos}/>
    </Box>


    
  )
}

export default SearchFeed;