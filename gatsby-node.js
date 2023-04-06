const path = require('path');

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    const config = getConfig();

    `config.resolve.alias['@'] = path.resolve(__dirname, 'src');`

    actions.replaceWebpackConfig(config);
};
