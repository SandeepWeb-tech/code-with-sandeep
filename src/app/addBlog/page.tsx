"use client";

import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");

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
      alert("Data submitted successfully");
      setTitle("");
      setDiscription("");
    }
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
      <p>Add new Blogs</p>
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          value={title}
          placeholder="add title"
          style={{
            border: "1px solid black",
            height: "40px",
            padding: "0.5rem",
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="add content"
          style={{
            border: "1px solid black",
            height: "300px",
            padding: "0.5rem",
          }}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <button
          style={{ height: "40px", background: "green" }}
          onClick={addData}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
