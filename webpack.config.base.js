import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
   entry: ['./src/index'],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
               'babel-loader',
               'ts-loader',
            ],
         },
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader',
            }),
         },
         {
            test: /\.html$/,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]',
               },
            },
         },
         {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader',
         },
         {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader',
         },
      ],
   },
   plugins: [
      new ExtractTextPlugin({
         filename: 'bundle.css',
         disable: process.env.NODE_ENV !== 'production'
      }),
      new webpack.NoEmitOnErrorsPlugin(),
   ],
   resolve: {
      extensions: ['.js', '.ts', '.tsx'],
   },
}
