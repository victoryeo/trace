var path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
  babel: { 
    test: /\.js$/, 
    loader: 'babel-loader', 
    exclude: /node_modules/ 
  }  
};