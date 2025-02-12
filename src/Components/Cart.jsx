import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addqty, removecart, subqty } from '../Rdux-Toolkit/Slice/cartslice';
import { Button, Typography, Grid, Box, Card, CardContent, CardMedia, Divider } from '@mui/material';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(removecart(_id));
  };

  const handleAdd = (_id) => {
    dispatch(addqty(_id));
  };

  const handleSub = (_id) => {
    dispatch(subqty(_id));
  };

  const cartItems = cart.map((item) => {
    const itemTotal = item.price * item.qty;
    return (
      <Grid style={{marginTop:"70px"}} key={item._id}>
        <Card>
          <CardMedia
          style={{objectFit: 'contain'}}
            component="img"
            alt={item.title}
            height="140"
            image={item.image}
            title={item.title}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Rs. {item.price} x {item.qty}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button variant="contained" color="error" onClick={() => handleDelete(item._id)}>
                Delete
              </Button>
              <Box>
                <Button variant="outlined" onClick={() => handleSub(item._id)}>-</Button>
                <Button variant="outlined" onClick={() => handleAdd(item._id)}>+</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <Box sx={{ padding: '20px', marginTop:"70px", }}>
      <Grid container spacing={2}>
        {cartItems}
      </Grid>
      <Box sx={{ marginTop: '20px', padding: '10px',borderRadius:'10px', border: '1px solid #ccc' }}>
        <Typography variant="h6">Order Summary</Typography>
        <Divider sx={{ margin: '10px 0' }} />
        <Box display="flex" justifyContent="space-between">
          <Typography>Subtotal</Typography>
          <Typography>Rs. {subtotal}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Shipping</Typography>
          <Typography>Rs. {shipping}</Typography>
        </Box>
        <Divider sx={{ margin: '10px 0' }} />
        <Box display="flex" justifyContent="space-between" fontWeight="bold">
          <Typography>Total</Typography>
          <Typography>Rs. {total}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Button variant="contained" color="primary" size="large">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;

