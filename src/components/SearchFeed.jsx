import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`)
     .then((data) => setVideos(data.items))
  }, []);

  return (
    <Box p={2} sx={{ overflowY: 'auto',
    height: '90vh', flex: 2}}>
      <Typography variant="h4"
      fontWeight="bold" md={2} sx={{
      color: 'white' }}>
       Search Results for: <span style={{ color: '#F31503'}}
        >videos</span>
      </Typography>

      <Videos videos={videos}/>
    </Box>


    </Stack>
  )
}

export default Feed