import React,{ useEffect, useState } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar"
import MyVideos from './MyVideos';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0e31d26db9msh44f4e715e5f5329p13828djsnc687b9fb17c2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const HomePage = () => {
      const [selectedCategory, setSelectedCategory] = useState("New");
      const [videos,setVideos] = useState([])
   

useEffect(() =>{
   const fetchMovies = async () =>{
     setVideos(null);
        try {
        const response = await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${selectedCategory}&part=snippet&maxResults=50&order=date`, options)
        if(response.ok){
            let data = await response.json()
            setVideos(data.items)
        }
    } catch (error) {
        console.log(error)
    }
   }
   fetchMovies()

},[selectedCategory])


  return (
     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "black", }}>
          Copyright © 2022 Google LLC
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "black" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
        <MyVideos videos={videos} />
      </Box>
      </Stack>
  );
}

export default HomePage;
