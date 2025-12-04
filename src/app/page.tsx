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
      title: "Sanchar saathi news",
      description: "lorem param ips",
    },
    {
      title: "mera gao",
      description: "lorem param ips",
    },
    {
      title: "mera gao me aao",
      description: "lorem param ips",
    },
  ];

  return (
    <div className="p-1 flex flex-row gap-12 font-sans dark:bg-black">
      {dataUser.map((ele) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {(ele.title.split('')[0]).toUpperCase()}
              </Avatar>
            }
            title={ele.title}
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {ele.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
