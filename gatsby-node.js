/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

// Set memory limits to avoid buffer issues
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Increase memory allocation for build
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
      optimization: {
        minimize: stage === 'build-javascript',
      },
      // Reduce chunk size to avoid memory issues
      performance: {
        hints: false,
      },
    });
  } else {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
    });
  }
};

// Add custom processing for Airtable nodes to prevent buffer overflow
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Process Airtable nodes to prevent buffer overflow
  if (node.internal.type === 'Airtable') {
    // Create a safe version of the node data
    const safeData = {};

    // Process each field in the node data
    Object.entries(node.data || {}).forEach(([key, value]) => {
      // Skip binary fields or attachment fields that aren't properly processed
      if (key === 'Logo' && !value.localFiles) {
        return;
      }

      // Limit string length to prevent buffer overflow
      if (typeof value === 'string' && value.length > 10000) {
        safeData[key] = value.substring(0, 10000) + '... (truncated)';
      } else {
        safeData[key] = value;
      }
    });

    // Add the safe data as a field
    createNodeField({
      node,
      name: 'safeData',
      value: safeData,
    });
  }
};
