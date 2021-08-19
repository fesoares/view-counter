module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    });

    return config;
  }
};
