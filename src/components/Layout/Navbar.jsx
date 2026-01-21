import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar({ sidebarWidth }) {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, ml: `${sidebarWidth}px` }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Corporate Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
