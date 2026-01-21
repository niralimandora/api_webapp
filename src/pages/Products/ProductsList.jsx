import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>

      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={3} key={p.id}>
            <Card
              sx={{
                height: 350,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
              onClick={() => navigate(`/products/${p.id}`)}
            >
              <CardMedia
                component="img"
                image={p.image}
                alt={p.title}
                sx={{
                  height: 180,
                  objectFit: "contain",
                  background: "#fff",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontWeight: 600
                  }}
                >
                  {p.title}
                </Typography>

                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  ${p.price}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating
                    value={p.rating.rate}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({p.rating.count})
                  </Typography>
                </Box>

                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", mt: 1, display: "block" }}
                >
                  Category: {p.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
