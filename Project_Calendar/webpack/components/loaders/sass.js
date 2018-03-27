module.exports = ExtractTextPlugin => {
  return {
    test: /\.scss/,
    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }))
  }
}
