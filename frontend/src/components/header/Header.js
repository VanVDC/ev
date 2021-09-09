import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import Button from '../customButton/Button';
import './header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header className='header-container'>
      <div className='header-center'>
        <div className='menu-wrap'>
          <input
            type='checkbox'
            checked={toggle}
            className='toggler'
            onClick={handleClick}
            onChange={(e) => {}}
          />
          <div className='hamburger'>
            <div></div>
          </div>
          <div className='menu'>
            <div>
              <div>
                <div className='left-header'>
                  <LinkContainer to='/'>
                    <div
                      className='link left-header-link'
                      onClick={handleClick}
                    >
                      {' '}
                      HOME
                    </div>
                  </LinkContainer>
                  <LinkContainer to='/aboutus'>
                    <div
                      className='link left-header-link'
                      onClick={handleClick}
                    >
                      {' '}
                      ABOUT US
                    </div>
                  </LinkContainer>
                  <LinkContainer to='/support'>
                    <div
                      className='link left-header-link'
                      onClick={handleClick}
                    >
                      {' '}
                      SUPPORT
                    </div>
                  </LinkContainer>
                  <LinkContainer to='/store'>
                    <div
                      className='link left-header-link'
                      onClick={handleClick}
                    >
                      {' '}
                      SHOP
                    </div>
                  </LinkContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='header-brand'>
          <LinkContainer to='/'>
            <div className='header-logo'>
              <span className='logo-text'>EV</span>
              <img alt='logo' src='/images/racing.png' />{' '}
              <span className='logo-text'>Wheels</span>
            </div>
          </LinkContainer>
        </div>

        <div className='right-header'>
          {userInfo ? (
            <NavDropdown title={userInfo.name.toUpperCase()} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                LOGOUT
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer className='button-content' to='/login'>
              <Button className='button button-header'>
                <span className='header-span'>LOGIN</span>{' '}
              </Button>
            </LinkContainer>
          )}
          {userInfo && userInfo.isAdmin && (
            <NavDropdown title='ADMIN' id='adminmenu'>
              <LinkContainer to='/admin/userlist'>
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/productlist'>
                <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/orderlist'>
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
          <LinkContainer to='/cart'>
            <span className='cart-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ionicon'
                viewBox='0 0 512 512'
              >
                <title>Cart</title>
                <circle
                  cx='176'
                  cy='416'
                  r='16'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
                <circle
                  cx='400'
                  cy='416'
                  r='16'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                  d='M48 80h64l48 272h256'
                />
                <path
                  d='M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
              </svg>
            </span>
          </LinkContainer>
        </div>
      </div>
    </header>
  );
};

export default Header;
