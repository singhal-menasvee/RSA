const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    assert: require.resolve('assert/'),
    crypto: require.resolve('crypto-browserify'),
    constants: require.resolve('constants-browserify'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    process: require.resolve('process/browser'),  // Add this line
    util: require.resolve('util/'),               // Add this line
  };
  
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',  // Add this line
    })
  );

  return config;
};
