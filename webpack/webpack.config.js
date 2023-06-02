const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
 mode:'development',
 entry:path.resolve(__dirname,'src/index.js'),
 output:{
    path:path.resolve(__dirname,'dist'),
    filename:'scripts.min[contenthash].js',
    clean:true,
 },
 devServer:{
  watchFiles: path.join(__dirname, 'src'),
  hot: true,
    port:3000,
    open:true,
    compress:true,
    historyApiFallback:true,
 },
 module:{
    rules:[
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        },
    ],
    
 },
 plugins:[
   new HtmlWebpackPlugin({
    title:'Forkio App',
    filename:'index.html',
    template:'./src/index.html'
   }),
   new CopyWebpackPlugin({
    patterns: [
      { from: 'src/img', to: 'img' },
    ],
  }),
 ]
}