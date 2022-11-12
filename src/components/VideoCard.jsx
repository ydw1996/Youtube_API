import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '275px', md: "275px", }, boxShadow: "none", borderRadius: 3, background: "#0f0f0f" }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '275px'}, borderRadius: 3, height: 160,  }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#0f0f0f", height: '80px', marginBottom: '30px', paddingTop: '5px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="regular" color="#FFF" fontSize= "16px">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) }
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard