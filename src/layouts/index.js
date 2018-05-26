import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'tachyons/css/tachyons.min.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import config from '../../data/config';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
        <div className='avenir'>
          <Helmet>
            <meta name="description" content={config.siteDescription}/>
          </Helmet>
          <Header/>
          {this.props.children()}
          <Footer/>
        </div>
    );
  }
}
