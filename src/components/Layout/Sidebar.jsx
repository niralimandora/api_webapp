import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({ width }) {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: width }}>
      <List sx={{ mt: 8, width: width }}>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItemButton>

     <ListItemButton component={Link} to="/users">
  <ListItemText primary="Users" />
</ListItemButton>

<ListItemButton component={Link} to="/products">
  <ListItemText primary="Products" />
</ListItemButton>

        <ListItemButton component={Link} to="/orders">
          <ListItemText primary="Orders" />
        </ListItemButton>
      </List>


      <ListItemButton component={Link} to="/products">
  <ListItemText primary="Products" />
</ListItemButton>

    </Drawer>
  );
}
