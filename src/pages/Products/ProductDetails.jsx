import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Chip,
  Divider
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Layout><Typography>Loading...</Typography></Layout>;
  if (!product) return <Layout><Typography>No product found</Typography></Layout>;

  return (
    <Layout>
      <Button
        component={Link}
        to="/products"
        variant="outlined"
        sx={{ mb: 2 }}
      >
        ← Back to Products
      </Button>

      <Grid container spacing={3}>
        {/* IMAGE SECTION */}
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2, display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{
                width: "90%",
                height: 350,
                objectFit: "contain",
                borderRadius: 2,
                background: "#fff",
              }}
            />
          </Card>
        </Grid>

        {/* DETAILS SECTION */}
        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3 }}>
            <CardContent>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                {product.title}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Typography variant="h5" color="primary" gutterBottom>
                ${product.price}
              </Typography>

              <Chip
                label={product.category}
                color="info"
                sx={{ mb: 2, textTransform: "uppercase" }}
              />

              <Typography variant="body1" sx={{ mb: 2 }}>
                {product.description}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Rating & Reviews
              </Typography>

              <Rating
                value={product.rating.rate}
                precision={0.5}
                readOnly
                size="large"
              />

              <Typography variant="body2" sx={{ mt: 1 }}>
                {product.rating.rate} ★ ({product.rating.count} reviews)
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
