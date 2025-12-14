"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface IAdmin {
  email: string;
  password: string;
}
const Admin = () => {
  const [admin, setAdmin] = useState(false);
  const [isOfferAvailable, setIsOfferAvailable] = useState(false);
  const [url, setUrl] = useState("");
  const [actualAmount, setIsActualAmount] = useState<Number>();
  const [afterDiscount, setIsAfterDiscount] = useState<Number>();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dataEmail, setDataEmail] = useState<IAdmin[]>();

  const dataL = localStorage.setItem("name", name);
  const dataM = localStorage.setItem("password", password);

  // const getAdminData = async () => {
  //   try {
  // const response = await fetch("/api/admin", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     Authorization: "Bearer YOUR_TOKEN",
  //   },
  // });

  //     console.log(response);
  //     const { success, data } = await response.json();
  //     if (success) {
  //       alert("Data fetched successfully");
  //       console.log(data);
  //       setDataEmail(data);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //   }
  // };

  // useEffect(() => {
  //   const localEmail = localStorage.getItem("name");

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/admin", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           Authorization: "Bearer YOUR_TOKEN",
  //         },
  //       });
  //       const { success, data } = await response.json();
  //       if (data.email && data.email === localEmail) {
  //         setAdmin(false);
  //       } else {
  //         setAdmin(true);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching admin data:", err);
  //       setAdmin(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const setData = async () => {
    const dataset = {
      isOfferAvailable,
      image: url,
      actualAmount,
      afterDiscount,
    };
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer YOUR_TOKEN",
        },
        body: JSON.stringify(dataset),
      });

      console.log(response);
      const { success, data } = await response.json();
      if (success) {
        alert("Data fetched successfully");
        console.log(data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const setAdminData = async () => {
    const dataset = {
      email: name,
      password,
    };
    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer YOUR_TOKEN",
        },
        body: JSON.stringify(dataset),
      });

      console.log(response);
      const { success, msg } = await response.json();
      if (success) {
        alert("Data fetched successfully");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <Box
      className="flex flex-col justify-center items-center bg-gradient-to-br
from-[#2dd4bf]
to-[#1f2937] h-full"
    >
      {admin ? (
        <Box className="flex flex-col justify-center items-center">
          <Typography>Add New Data To the Field</Typography>
          <TextField
            id="outlined-basic"
            label="isOfferAvailable"
            variant="outlined"
            onChange={(e) => setIsOfferAvailable(e.target.value === "true")}
          />
          <TextField
            id="outlined-basic"
            label="image url"
            variant="outlined"
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="actual Amount"
            variant="outlined"
            onChange={(e) => setIsActualAmount(parseInt(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="after Discount"
            variant="outlined"
            onChange={(e) => setIsAfterDiscount(parseInt(e.target.value))}
          />
          <Button variant="outlined" color="primary" onClick={setData}>
            Add Data
          </Button>
        </Box>
      ) : (
        <Box className="flex flex-col justify-center items-center rounded gap-3">
          <Box className="flex flex-col justify-center items-center w-full p-5 gap-2 bg-blue-500 rounded-tl-4xl">
            <AccountCircleIcon style={{ fontSize: "120px" }} />
            <Typography className="text-white">Member Login Here!</Typography>
          </Box>
          <TextField
            id="outlined-basic"
            label="email"
            className="w-[300px]"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            className="w-[300px]"
            label="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={setAdminData}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Admin;
