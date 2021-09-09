import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import './store.css';
// import ProductCarousel from '../carousel/ProductCarousel';

import Message from '../Message';
import Loader from '../Loader';
import Product from '../product/Product';
import Paginate from '../Paginate';
import SearchBox from '../SearchBox';
import { listProducts } from '../../actions/productActions';

const Store = ({ match, history }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div className='store-container'>
      <SearchBox history={history} />
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )} */}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </div>
  );
};

export default Store;
