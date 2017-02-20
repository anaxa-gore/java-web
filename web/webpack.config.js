/**
 * Created by A4811584 on 17/02/2017.
 *
 * Fichier de configuration de webpack.
 */
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|node_installation/,
        loader: 'babel-loader'
      }
    ]
  }
};