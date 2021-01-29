import React, { Component } from 'react';
import ComingSoon from 'react-coming-soon';
import { Link } from 'react-router-dom';
import leftArrow from './homepage/assets/left-arrow.png';

export default class CommingSoon extends Component {
  render() {
    return (
      <div>
        <ComingSoon
          image='https://react-coming-soon.maksv.me/default-image.jpeg'
          bgColor='#111'
          textColor='#fff'
          illustration='development'
        >
          <Link
            to='/'
            style={{
              background: 'transparent',
              textDecoration: 'none',
              color: '#fff',
              fontSize: '1.4em',
              fontWeight: '300',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <img
              src={leftArrow}
              style={{ width: '30px', marginRight: '10px' }}
              alt=''
            />
            back to home
          </Link>
        </ComingSoon>
      </div>
    );
  }
}
