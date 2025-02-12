import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtocart } from '../Rdux-Toolkit/Slice/cartslice';

const CardList = ({ id, title, price, category, image, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const cart = useSelector(state => state.cart.cart); 

  
  const isItemInCart = cart.some(item => item._id === id);

  const handlecart = (item) => {
    dispatch(addtocart(item));
    navigate("/cart");
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const item = { _id: id, title, price, category, image, description };

  return (
    <>
      <Card sx={{ boxShadow: 4, display: 'inline-block', marginRight: '20px', marginLeft: '20px', marginTop: '90px', height: '430px', width: "300px", objectFit: 'contain' }}>
        <CardMedia
          component="img"
          height="200px"
          width="0px"
          image={image}
          onClick={handleClickOpen}
          sx={{ cursor: 'pointer', objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            <b>{title}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Rs.{price}</b> <br />
            <b>Category: {category}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" style={{ backgroundColor: 'orange', color: 'white', marginLeft: '10px' }}>
            BUY NOW
          </Button>
          <Button
            onClick={() => handlecart(item)}
            size="large"
            disabled={isItemInCart} 
            style={{
              backgroundColor: isItemInCart ? 'gray' : 'green',
              color: 'white',
              marginLeft: '30px'
            }}
          >
            {isItemInCart ? 'Added Item' : 'Add to cart'} 
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="150px"
            width="100px"
            image={image}
            sx={{ marginBottom: '20px', objectFit: 'contain' }}
          />
          <Typography variant="h6" color="text.primary">
            <b>Product Details:</b>
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            <b>Price: Rs.{price}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Category: {category}</b>
          </Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardList;
