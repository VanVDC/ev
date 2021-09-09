import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import './product.css';
const Product = ({ product }) => {
  return (
    <div className='card'>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className='card-body'>
        <Link to={`/product/${product._id}`}>
          <div className='card-name'>
            <strong>{product.name}</strong>
          </div>
        </Link>

        <div className='card-review'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <div className='card-price'>${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
