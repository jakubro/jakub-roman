import React from 'react';
import { GitHubIcon, GoodReadsIcon, LinkedInIcon, StackOverflowIcon, TwitterIcon, UpworkIcon } from './Icons';

export default function Footer() {
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
            © 2018 Jakub Roman
          </p>
        </div>
        <div className='db dtc-ns black-70 tc tr-ns v-mid'>
          <a href='https://twitter.com/jakubro' className='link dim dib mr3 black-70'>
            <TwitterIcon className='db w2 h2' />
          </a>
          <a href='https://www.upwork.com/fl/jakubroman' className='link dim dib mr3 black-70'>
            <UpworkIcon className='db w2 h2' />
          </a>
          <a href='https://stackoverflow.com/users/420552' className='link dim dib mr3 black-70'>
            <StackOverflowIcon className='db w2 h2' />
          </a>
          <a href='https://github.com/jakubro' className='link dim dib mr3 black-70'>
            <GitHubIcon className='db w2 h2' />
          </a>
          <a href='https://www.goodreads.com/user/show/45469521-jakub' className='link dim dib mr3 black-70'>
            <GoodReadsIcon className='db w2 h2' />
          </a>
          <a href='https://www.linkedin.com/in/jakubroman' className='link dim dib black-70'>
            <LinkedInIcon className='db w2 h2' />
          </a>
        </div>
      </div>
      <div className='db dn-ns'>
        <p className='f7 black-70 mt4 tc'>
          © 2018 Jakub Roman
        </p>
      </div>
    </footer>
  );
}
