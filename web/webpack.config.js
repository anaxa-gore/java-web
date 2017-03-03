/**
 * Created by A4811584 on 17/02/2017.
 *
 * Fichier de configuration de webpack.
 */
const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|node_installation/,
        loaders: ['babel-loader']
      },
      {
        // Pour les sources, on passe également par isparta pour la couverture de code
        test: /\.js$/,
        include: path.resolve('src/'),
        loaders: ['isparta-loader', 'babel-loader']
      }
    ]
  }
};