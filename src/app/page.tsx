"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      description:
        "lorem param ips lorem param iplorem lorem param iplorem param iplorem param iplorem param iplorem param iplorem param iplorem param iplorem param ipparam iplorem param iplorem param iplorem param iplorem param ipvlorem param iplorem param ipvlorem param ipvvlorem param iplorem param iplorem param iplorem param iplorem param ipvlorem param iplorem param iplorem param iplorem param iplorem param iplorem param iplorem param ipvvvlorem param iplorem param iplorem param iplorem param ip",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {data.map((ele) => (
        <Accordion slotProps={{ heading: { component: "h4" } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box className="flex flex-row gap-2 items-center">
                <Typography style={{ background: 'red', padding: '0.3rem 0.6rem', borderRadius: '15px'}}>{ele.title.split("")[0].toUpperCase()}</Typography>
                <Typography>{ele.title}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box className='flex flex-col'>
              <Box className='flex flex-row'>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon className="text-blue-500 w-12 h-12 animate-bounce" />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Box>{ele.description}</Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
