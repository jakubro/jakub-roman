import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
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
        <Helmet>
          <meta name="description" content='Tech enthusiast. Coffee addict. Cat person. Read a lot. Concise.' />
        </Helmet>
        <Header />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}
