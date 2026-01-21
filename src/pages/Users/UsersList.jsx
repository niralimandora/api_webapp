

import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  useEffect(fetchUsers, []);

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: "DELETE" })
      .then(() => fetchUsers());
  };

  return (
    <Layout>
      <h2>Users</h2>
      <Button variant="contained" onClick={() => navigate("/users/add")}>
        Add User
      </Button>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id}>
              <TableCell><Avatar src={u.avatar} /></TableCell>
              <TableCell>{u.name}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/users/${u.id}`)} size="small">View</Button>
                <Button onClick={() => navigate(`/users/edit/${u.id}`)} size="small">Edit</Button>
                <Button color="error" onClick={() => deleteUser(u.id)} size="small">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
}
