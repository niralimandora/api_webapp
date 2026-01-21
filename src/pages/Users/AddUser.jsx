import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

export default function AddUser(){
  const navigate = useNavigate();
  const [data, setData] = useState({ name:"", email:"", phone:"", avatar:"" });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
    }).then(() => navigate("/users"));
  };

  return (
    <Layout>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth sx={{mb:2}} onChange={e=>setData({...data,name:e.target.value})}/>
        <TextField label="Email" fullWidth sx={{mb:2}} onChange={e=>setData({...data,email:e.target.value})}/>
        <TextField label="Phone" fullWidth sx={{mb:2}} onChange={e=>setData({...data,phone:e.target.value})}/>
        <TextField label="Avatar URL" fullWidth sx={{mb:2}} onChange={e=>setData({...data,avatar:e.target.value})}/>
        <Button type="submit" variant="contained">Create</Button>
      </form>
    </Layout>
  );
}
