"use client"
import { useEffect, useState } from "react";

interface iData {
  title:string;
  description: string
  _id: string
}

export default function Home() {

  const [data, setData] = useState<iData[]>([]);

   const getData = async () => {
    try {

      const response = await fetch('/api/user', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",   // tells server we expect JSON
        "Accept": "application/json",         // tells server we want JSON back
        "Authorization": "Bearer YOUR_TOKEN"  // optional: add if API requires auth
      }
    });

      console.log(response);
      const { success, data } = await response.json();
      if (success) {
        alert("Data fetched successfully");
        console.log(data);
        setData(data)
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
      content: "lorem param ips",
    },
    {
      title: "mera gao",
      content: "lorem param ips",
    },
    {
      title: "mera gao me aao",
      content: "lorem param ips",
    },
  ];

  return (
    <div className="p-8 flex flex-row gap-12 font-sans dark:bg-black">
      {data.map((ele) => (
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            flexWrap: 'wrap',
            gap: "1rem",
            boxShadow: "box-shadow: 0 4px 12px rgba(0,0,0,0.1)",
            background: "#f1cfcfff",
            borderRadius: "12px",
          }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: 500 }}>{ele.title}</h1>
          <p style={{ fontSize: "14px", fontWeight: 400 }}>{ele.description}</p>
          <button style={{ background: "blue", width: "120px" }}>
            Add to favoriate
          </button>
        </div>
      ))}
    </div>
  );
}
