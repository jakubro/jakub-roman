import PropTypes from 'prop-types';
import React from 'react';
import {GitHubIcon, GoodReadsIcon, LinkedInIcon, StackOverflowIcon, TwitterIcon, UpworkIcon} from './Icons';
import config from '../../data/config';

export default function Footer() {
  const socialLinks = [
    {to: 'https://twitter.com/jakubro', as: TwitterIcon, ariaLabel: 'Twitter'},
    {to: 'https://github.com/jakubro', as: GitHubIcon, ariaLabel: 'GitHub'},
    {to: 'https://stackoverflow.com/users/420552', as: StackOverflowIcon, ariaLabel: 'Stack Overflow'},
    {to: 'https://www.goodreads.com/jakubro', as: GoodReadsIcon, ariaLabel: 'Goodreads'},
    {to: 'https://www.upwork.com/fl/jakubroman', as: UpworkIcon, ariaLabel: 'Upwork'},
    {to: 'https://www.linkedin.com/in/jakubroman', as: LinkedInIcon, ariaLabel: 'LinkedIn'},
  ];

  return (
      <footer className='mw7-ns center-ns pv4 ph4-s black-70 bt b--black-10'>
        {/*<section className='cf mb5'>
        <div className='mb4 mb0-ns fl w-100 w-50-l'>
          <p className='f4 fw6 mb2 f6 mt0'>
            Sign up for my newsletter.
          </p>
          <input placeholder='Your Email Address' className='mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box' />
          <input type='submit' className='input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray' />
        </div>
      </section>*/}
        <div className='dt dt--fixed w-100'>
          <div className='dn dtc-ns v-mid'>
            <p className='f7 black-70 dib pr3 mb3'>
              © 2012 - {(new Date()).getFullYear()} {config.siteAuthor}
            </p>
          </div>
          <div className='db dtc-ns black-70 tc tr-ns v-mid'>
            {socialLinks.map((props, i) => (
                <FooterSocialLink
                    {...props}
                    key={i}
                    className={i + 1 < socialLinks.length ? 'mr3' : ''}
                />
            ))}
          </div>
        </div>
        <div className='db dn-ns'>
          <p className='f7 black-70 mt4 tc'>
            © 2012 - {(new Date()).getFullYear()} {config.siteAuthor}
          </p>
        </div>
      </footer>
  );
}

function FooterSocialLink({className, as: Component, to, ariaLabel}) {
  return (
      <a href={to} aria-label={ariaLabel} className={`link dim dib black-70 ${className}`}>
        <Component className='db w2 h2'/>
      </a>
  );
}

FooterSocialLink.propTypes = {
  className: PropTypes.string,
  as: PropTypes.any,
  to: PropTypes.string,
};
