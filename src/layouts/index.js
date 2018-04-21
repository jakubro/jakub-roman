import PropTypes from 'prop-types';
import React from 'react';
import 'tachyons/css/tachyons.min.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div className='avenir'>
        <Header />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}
