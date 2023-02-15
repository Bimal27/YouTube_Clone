import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from './ChannelCard';
import MyVideos from './MyVideos';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0e31d26db9msh44f4e715e5f5329p13828djsnc687b9fb17c2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();


  useEffect(() =>{
   const fetchMovies = async () =>{
        try {
        const response = await fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`, options)
        if(response.ok){
            let data = await response.json()
            // console.log(data)
            setChannelDetail(data?.items[0]);
        }
    } catch (error) {
        console.log(error)
    }
   }
   fetchMovies()

},[id])

  useEffect(() =>{
   const fetchMovies = async () =>{
        try {
        const response = await fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`, options)
        if(response.ok){
            let videosData = await response.json()
            setVideos(videosData?.items);
        }
    } catch (error) {
        console.log(error)
    }
   }
   fetchMovies()

},[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(189,40,47,1) 13%, rgba(156,148,233,1) 94%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <MyVideos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;