import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

export default function ArticleListItem({ slug, title, date, excerpt }) {
  return (
    <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
      <div className='flex flex-column flex-row-ns'>
        <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
          <Link to={slug}>
            <h1 className='f4 mt0 lh-title'>{title}</h1>
          </Link>
          <p className='f5 lh-copy' dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
        {/*<div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns'>
          <img src='http://via.placeholder.com/640x427' className='db' alt='...' />
        </div>*/}
      </div>
      <time className='f6 db gray'>{date}</time>
    </article>
  );
}

ArticleListItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
};
