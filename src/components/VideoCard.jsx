import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "284px", }, boxShadow: "none", borderRadius: 3 }}>
    <Link to={video?.id?.videoId ? `/video/${video.id.videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={video?.snippet?.thumbnails?.medium?.url || demoThumbnailUrl} alt={video?.snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 170 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "white", height: '96px' }}>
      <Link to={video?.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="black">
          {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {video?.snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard
