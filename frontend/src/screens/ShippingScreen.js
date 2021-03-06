import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';
const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 style={{ color: 'grey' }}>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          {/* <Form.Label style={{ color: 'black' }}>Address</Form.Label> */}
          <Form.Control
            type='text'
            className='px-3'
            placeholder='Enter Address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          {/* <Form.Label style={{ color: 'black' }}>City</Form.Label> */}
          <Form.Control
            type='text'
            className='px-3'
            placeholder='Enter City'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalcode'>
          {/* <Form.Label style={{ color: 'black' }}>Postal Code</Form.Label> */}
          <Form.Control
            type='text'
            className='px-3'
            placeholder='Enter Postal Code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          {/* <Form.Label style={{ color: 'black' }}>Country</Form.Label> */}
          <Form.Control
            type='text'
            className='px-3'
            placeholder='Enter Country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' className='my-4' variant='secondary'>
          {' '}
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
