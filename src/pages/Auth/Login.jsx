import { Button, TextField, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // for now just navigate (because no backend)
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#e3f2fd"
    }}>
      <Paper elevation={3} style={{ padding: 30, width: 350 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ marginTop: 16 }}
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" align="center" style={{ marginTop: 16 }}>
          <Link to="/dashboard">Continue without login</Link>
        </Typography>
      </Paper>
    </div>
  );
}
