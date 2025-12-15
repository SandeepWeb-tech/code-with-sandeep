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
import GlobalImage from "../../public/globe.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { Api, TypeSpecimenOutlined } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

// interface iData {
//   title: string;
//   description: string;
//   _id: string;
// }

// const api = fetch("/api/user").then(res => res.json());

// const data = use(Api);

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  //  useEffect(() => {
  //   console.log('token', token)
  //   if (!token) {
  //     router.push("/login");
  //   } else {
  //     try {
  //       // Just decode, don’t verify with secret on client
  //       const decoded = jwt.decode(token);
  //       if (decoded) {
  //         getData(); // fetch protected data
  //       } else {
  //         localStorage.removeItem("token");
  //         router.push("/login");
  //       }
  //     } catch (err) {
  //       localStorage.removeItem("token");
  //       router.push("/login");
  //     }
  //   }
  // }, []);

  const getData = async () => {
    try {
      const response = await fetch("/api/product", {
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

  const dataUser = [
    {
      title: "mera gao",
      description:
        "lorem param ips lorem param iplorem lorem param iplorem param iplorem param iplorem param iplorem param iplorem param iplorem param iplorem param ipparam iplorem param iplorem param iplorem param iplorem param ipvlorem param iplorem param ipvlorem param ipvvlorem param iplorem param iplorem param iplorem param iplorem param ipvlorem param iplorem param iplorem param iplorem param iplorem param iplorem param iplorem param ipvvvlorem param iplorem param iplorem param iplorem param ip",
    },
  ];

  const deleteData = async (_id: any) => {
    try {
      const response = await fetch("/api/product", {
        method: "DELETE", // ✅ use DELETE
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_TOKEN",
        },
        body: JSON.stringify({ _id }), // ✅ send id in body
      });

      const { status, message } = await response.json();

      if (status) {
        alert("Data deleted successfully");
        // Optionally refresh your data list here
      } else {
        alert("Failed to delete: " + message);
      }
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  return (
    <>
      <Box className="flex">
        {data.map((element: any) => (
          <Card className="flex flex-col p-2 gap-2 w-[250px]" key={element._id}>
            <Box className="flex justify-between itens-center">
              {element.isOfferAvailable && (
                <span className="text-white bg-red-500 rounded-lg pl-2 pr-2">
                  offer 50%
                </span>
              )}
              <FavoriteIcon
                className="w-12 h-12 text-red-500"
                onClick={() => deleteData(element._id)}
              />
            </Box>
            <Box className="flex flex-col justify-between items-center">
              <Image
                src={element.image}
                alt="Logo"
                width={200}
                height={140}
                className="center"
              />
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                {element.isOfferAvailable}
              </Typography>
              <Typography style={{ fontSize: "18px", color: "black" }}>
                <span
                  style={{
                    fontSize: "14px",
                    color: "grey",
                    textDecoration: "line-through",
                    marginRight: "10px",
                  }}
                >
                  ${element.actualAmount}
                </span>
                ${element.afterDiscount}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                {" "}
                <AddShoppingCartIcon
                  fontSize="medium"
                  className="z-111 text-red-50"
                />{" "}
                Add to cart
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
      {/* <div
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
                <Typography
                  style={{
                    background: "red",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "15px",
                  }}
                >
                  {ele.title.split("")[0].toUpperCase()}
                </Typography>
                <Typography>{ele.title}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex flex-col">
                <Box className="flex flex-row">
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
      </div> */}
    </>
  );
}
