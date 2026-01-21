import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Grid, Paper, Typography } from "@mui/material";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r=>r.json()).then(setUsers);

    fetch("https://fakestoreapi.com/products")
      .then(r=>r.json()).then(setProducts);
  },[]);

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>Dashboard Overview</Typography>

      <Grid container spacing={2}>
        <Grid item xs={3}><Paper sx={{p:2}}><h3>Users</h3><h2>{users.length}</h2></Paper></Grid>
        <Grid item xs={3}><Paper sx={{p:2}}><h3>Products</h3><h2>{products.length}</h2></Paper></Grid>
        <Grid item xs={3}><Paper sx={{p:2}}><h3>Revenue</h3><h2>$140K</h2></Paper></Grid>
        <Grid item xs={3}><Paper sx={{p:2}}><h3>Orders</h3><h2>200</h2></Paper></Grid>
      </Grid>
    </Layout>
  );
}
