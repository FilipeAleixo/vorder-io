module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      }
    )
    return config
  }
}