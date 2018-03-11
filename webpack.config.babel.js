import path from 'path'
import webpack from 'webpack'
import baseConfig from './webpack.config.base'

export default {
   ...baseConfig,
   devtool: 'cheap-module-eval-source-map',
   plugins: [
      ...baseConfig.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
         __DEVELOPMENT__: true,
      }),
   ],
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      hot: true,
      noInfo: true,
      port: 3000,
   },
   mode: 'development',
   watch: true,
}
