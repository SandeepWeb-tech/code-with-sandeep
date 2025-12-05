"use client";
import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';

interface iData {
  title: string;
  description: string;
  _id: string;
}

export default function Home() {
  const [data, setData] = useState<iData[]>([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer YOUR_TOKEN",
        },
      });

      console.log(response);
      const { success, data } = await response.json();
      if (success) {
        alert("Data fetched successfully");
        console.log(data);
        setData(data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dataUser = [
    {
      title: "mera gao",
      description: "lorem param ips",
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px'}}>
      {data.map((ele) => (
        <Card sx={{ position: 'relative', maxHeight: '300px', minWidth: '400px', maxWidth: '600px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {(ele.title.split('')[0]).toUpperCase()}
              </Avatar>
            }
            title={ele.title}
            subheader="September 14, 2016"
          />
          <CardContent style={{ maxHeight: '300px',overflow: 'scroll', padding: '0.5rem', paddingBottom: '8rem' }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {ele.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing style={{ position: 'absolute', bottom: '0px', width: '100%', background: 'red' }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      </div>
  );
}
