import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Button from '../customButton/Button';
import { listTopProducts } from '../../actions/productActions';
import './homeProduct.css';

const HomeProducts = ({ history }) => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  const addToCartHandler = (id) => {
    history.push(`/cart/${id}?qty=${1}`);
  };

  return (
    <div className='product-container'>
      {loading ? (
        <Loader />
      ) : products ? (
        products
          .filter((p, index) => index <= 3)
          .map((product) => (
            <div className='product-section' key={product._id}>
              <img src={product.image} alt={product.name} />

              <div className='product-text'>
                <h2
                  className='product-name'
                  onClick={() => history.push(`/product/${product._id}`)}
                >
                  {product.name}
                </h2>
                <hr className='product-line' />
                <h3 className='product-price'>${product.price}</h3>

                <Button
                  onClick={() => addToCartHandler(product._id)}
                  disabled={product.countInStock === 0}
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          ))
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default HomeProducts;
