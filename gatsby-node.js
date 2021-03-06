/* eslint-env node */
/* eslint-disable no-console */

const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
        graphql(
            `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title,
                    template
                  }
                }
              }
            }
          }
        `,
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          // Create blog posts pages.
          const posts = result.data.allMarkdownRemark.edges;

          _.each(posts, (post, index) => {
            const templateName = post.node.frontmatter.template || 'left-title-top-border';
            const previous = index === posts.length - 1 ? false : posts[index + 1].node;
            const next = index === 0 ? false : posts[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: path.resolve(`./src/templates/${templateName}.js`),
              context: {
                slug: post.node.fields.slug,
                previous,
                next,
              },
            });
          });
        }),
    );
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
