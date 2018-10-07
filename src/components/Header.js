import Link from 'gatsby-link';
import React from 'react';
import profilePicture from './profile-picture.png';

export default function Header() {
  return (
    <header className='tc mw7-ns center-ns pv4 pv5-ns black-80'>
      <Link to='/'>
        <img src={profilePicture} className='br-100 pa1 ba b--black-10 h3 w3' alt='Jakub Roman' />
      </Link>
      <h1 className='f2 fw9 black-80'>Jakub Roman</h1>
      <h2 className='f6 gray fw2-ns fw3 ttu tracked'>
        Tech enthusiast. Coffee addict. Cat person. Avid reader. Concise.
      </h2>
      {/*<nav className='bt bb tc mw7 center mt4'>
        <Link to='/' className='f6 f5-l dib pa3 ph4-l link dim black-90'>Home</Link>
        <Link to='/portfolio' className='f6 f5-l dib pa3 ph4-l link dim black-90'>Portfolio</Link>
        <Link to='/shop' className='f6 f5-l dib pa3 ph4-l link dim black-90'>Shop</Link>
        <Link to='/about' className='f6 f5-l dib pa3 ph4-l link dim black-90'>About</Link>
        <Link to='/contact' className='f6 f5-l dib pa3 ph4-l link dim black-90'>Contact</Link>
      </nav>*/}
    </header>
  );
}
