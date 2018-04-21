import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import ArticleList from '../components/ArticleList';
import ArticleListItem from '../components/ArticleListItem';

export default class BlogIndex extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    let posts = get(this, 'props.data.allMarkdownRemark.edges');
    posts = posts.filter(({ node }) => node.frontmatter.type !== 'page'); // todo: do this in graphql

    return (
      <div className='mw7-ns center-ns'>
        <Helmet title={siteTitle} />
        {posts.length > 0 && (
          <ArticleList>
            {posts.map(({ node }) => (
              <ArticleListItem
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title || node.fields.slug}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
              />
            ))}
          </ArticleList>
        )}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            type
          }
        }
      }
    }
  }
`;
