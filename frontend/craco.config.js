// Load configuration from environment or config file
const path = require('path');
const webpack = require('webpack');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // CRA only exposes REACT_APP_*-prefixed vars to the client bundle. This project
      // uses plain SUPABASE_URL / SUPABASE_KEY names instead, so bake those in explicitly.
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          'process.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
          'process.env.SUPABASE_KEY': JSON.stringify(process.env.SUPABASE_KEY),
        })
      );

      // Add watch options for hot reload delays

      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });
        
        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      }
      
      return webpackConfig;
    },
  },
};
  
