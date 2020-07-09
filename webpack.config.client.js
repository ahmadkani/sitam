const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
var BrotliPlugin = require('brotli-webpack-plugin');

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "thread-loader",

                        options: {

                          workers: 2,

                          workerParallelJobs: 50,

                          workerNodeArgs: ['--max-old-space-size=1024'],

                          poolRespawn: false,

                          poolTimeout: 2000,
                    
                          poolParallelJobs: 50,

                          name: "my-pool"
                        }
                      },       
                    'cache-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },  
    plugins: [
        new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
    }
}

module.exports = config
