
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: { presets: [ 'es2015', 'react' ] }
        }
      }
    ]
  }
};

