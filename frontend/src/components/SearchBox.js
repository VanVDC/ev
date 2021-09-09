import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submiteHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submiteHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-1 ml-sm-5'
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;
