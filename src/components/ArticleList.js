import PropTypes from 'prop-types';
import React from 'react';

export default function ArticleList({children}) {
  return (
      <section className='mw7 center'>
        <h1 className='f3 fw9 ph3 ph0-l'>Latest Posts</h1>
        {children}
      </section>
  );
}

ArticleList.propTypes = {
  children: PropTypes.any,
};
