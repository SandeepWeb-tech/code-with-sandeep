"use client";

import { Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [show, setShow] = useState(false);

  const addData = async () => {
    console.log(title, description);
    const data = {
      title: title,
      description: description,
    };
    const res = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { msg, success } = await res.json();
    if (success === true) {
      setTitle("");
      setDiscription("");
      setShow(true);
    }

    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Typography style={{ fontSize: "14px", fontWeight: 400 }}>
        The Add Blogs feature allows users to easily create, edit, and publish
        blog posts directly from the platform. It provides a simple and
        intuitive interface where writers can share ideas, stories, tutorials,
        or updates with their audience
      </Typography>
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          id="outlined-basic"
          value={title}
          label="Add Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <input
          type="text"
          value={title}
          placeholder="add title"
          style={{
            border: "1px solid black",
            height: "40px",
            padding: "0.5rem",
          }}
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        <TextareaAutosize
          aria-label="Add Content"
          minRows={5}
          value={description}
          placeholder="Add Content"
          onChange={(e) => setDiscription(e.target.value)}
          style={{ border: "1px solid black", padding: "0.5rem" }}
        />
        {/* <textarea
          value={description}
          placeholder="add content"
          style={{
            border: "1px solid black",
            height: "300px",
            padding: "0.5rem",
          }}
          onChange={(e) => setDiscription(e.target.value)}
        /> */}
        <Button
          style={{ height: "40px" }}
          onClick={addData}
          variant="contained"
          color="primary"
        >
          Post
        </Button>
      </div>

      {show && (
        <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
      )}
    </div>
  );
};

export default AddBlog;
