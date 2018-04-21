import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

export default class BlogPostTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <article className='mw7-ns center-ns cf ph3-s pv5'>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <header className='fn fl-ns w-50-ns pr4-ns'>
          <h1 className='f2 lh-title fw9 mb3 mt0 pt3 bt bw2'>
            {post.frontmatter.title}
          </h1>
          {/*<h2 className='f3 mid-gray lh-title'>
            An excerpt from the Form of the Book by Jan Tschichold
          </h2>*/}
          <time className='f6 ttu tracked gray'>{post.frontmatter.date}</time>
        </header>
        <div className='fn fl-ns w-50-ns'>
          <div className='f5 lh-copy measure mt0-ns' dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
