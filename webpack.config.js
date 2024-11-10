const path = require('path');

module.exports = (env) => {
  const isProd = env === 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: isProd ? 'production' : 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
