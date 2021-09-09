import './form.css';
import React from 'react';

const Form = () => {
  return (
    <div className='background'>
      <div className='form-container'>
        <div className='form-screen'>
          <div className='form-screen-header'>
            <p className='form-title'>CONTACT</p>
          </div>
          <div className='form-screen-body'>
            <div className='form-screen-body-item left'>
              <div className='app-title'>
                <span>TALK TO US</span>
                <div className='app-contact'>
                  ADDRESS : 5555 Wrong Lane, Holli, CA 30081
                </div>

                <div className='app-contact'>PHONE : 555 555 5555</div>
                <div className='app-contact'>EMAIL : mike@evwheels.com</div>
              </div>
            </div>
            <div className='form-screen-body-item'>
              <div className='app-form'>
                <div className='app-form-group'>
                  <input
                    className='app-form-control'
                    placeholder='NAME'
                    defaultValue='Mike Smith'
                  />
                </div>
                <div className='app-form-group'>
                  <input className='app-form-control' placeholder='EMAIL' />
                </div>
                <div className='app-form-group'>
                  <input className='app-form-control' placeholder='NAME ' />
                </div>
                <div className='app-form-group message'>
                  <input className='app-form-control' placeholder='MESSAGE' />
                </div>
                <div className='app-form-group buttons'>
                  <button className='app-form-button'>CANCEL</button>
                  <button className='app-form-button'>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
