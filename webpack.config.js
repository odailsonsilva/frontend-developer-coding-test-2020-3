const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: { // codigo transpilado pelo webpack, é onde vai ficar o bundle
      path: path.resolve(__dirname, 'public'),
      filename: "bundle.js"
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'public'),
   },
   module: {
      rules: [ // onde ficam os loaders, de para,
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.css$/,
            use: [
               { loader: "style-loader" }, // importa arquivos css
               { loader: "css-loader" }, // para importacao de outros arquivos dentro do .css
            ]
         },
         {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: [
               {loader: 'file-loader'}
            ]
         }
      ]
   }
};