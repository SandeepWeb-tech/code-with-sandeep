"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
const Admin = () => {
  const [admin, setAdmin] = useState(true);
  const [isOfferAvailable, setIsOfferAvailable] = useState(false);
  const [url, setUrl] = useState('');
  const [actualAmount, setIsActualAmount] = useState<Number>();
  const [afterDiscount, setIsAfterDiscount] = useState<Number>();



  const setData = async () => {
    const dataset = {
      isOfferAvailable,
      image: url,
      actualAmount,
      afterDiscount
    }
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer YOUR_TOKEN",
        },
        body:JSON.stringify(dataset)
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



  return (
    <Box>
      {admin ? (
        <Box className='flex flex-col justify-center items-center'>
          <Typography>Add New Data To the Field</Typography>
          <TextField
            id="outlined-basic"
            label="isOfferAvailable"
            // value={isOfferAvailable ? "true" : "false"}
            variant="outlined"
            onChange={(e) => setIsOfferAvailable(e.target.value === "true")}
          />
          <TextField id="outlined-basic" label="image url" variant="outlined" onChange={(e) => setUrl(e.target.value)}/>
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
          <Button variant="outlined" color="primary" onClick={setData}>Add Data</Button>
        </Box>
      ) : (
        <Box className='flex flex-col justify-center items-center'>
          <Typography>Login</Typography>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="password" variant="outlined" />

          <Button variant="outlined" color='primary'>Login</Button>
        </Box>
      )}
    </Box>
  );
};

export default Admin;
