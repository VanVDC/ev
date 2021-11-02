import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listProductDetails, updateProduct } from '../actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [youtubeURL, setYoutubeURL] = useState('');
  // specs

  const [range, setRange] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [weight, setWeight] = useState(null);
  const [motorPower, setMotorPower] = useState(null);
  const [battery, setBattery] = useState(null);

  // end specs
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/admin/productlist');
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
        // specs

        // setRange();
        // setSpeed();
        // setWeight();
        // setMotorPower();
        // setBattery();
        // setYoutubeURL();
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/upload', formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
        youtubeURL,
        specs: {
          range: range,
          speed: speed,
          weight: weight,
          motorPower: motorPower,
          battery: battery,
        },
      })
    );
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1 style={{ color: 'grey' }}>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                style={{ color: 'grey' }}
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Brand</Form.Label>
              <Form.Control
                style={{ color: 'black' }}
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* Form specs specs: {
      range: 57,
      speed: 34,
      weight: 60,
      motorPower: 2200,
      battery: 1500,
    }, */}
            <Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    placeholder='Range'
                    type='text'
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder='Speed'
                    type='text'
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder='Weight'
                    type='text'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder='Motor Power'
                    type='text'
                    value={motorPower}
                    onChange={(e) => setMotorPower(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder='Battery'
                    type='text'
                    value={battery}
                    onChange={(e) => setBattery(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Video link */}

            <Form.Group controlId='youtubeURL' className='my-3'>
              <Form.Label style={{ color: 'black' }}>Video Link</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Youtube Link'
                value={youtubeURL}
                onChange={(e) => setYoutubeURL(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='light' className='my-3'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};
export default ProductEditScreen;
