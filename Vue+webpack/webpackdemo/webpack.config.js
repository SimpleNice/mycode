const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
    //定义入口文件
    entry:{
        // entry:'./src/entry.js',
        // entry2:'./src/entry2.js',
        app:'./src/index.js',
        print:'./src/print.js'
    },
    //定义出口文件
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].index.js',
        publicPath:'/'
        // filename:index.js,
    },
    //加载模块
    module:{
        //规则
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            }

        ]
    },
    //插件
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'落花浅忆学习webpack'
        })
    ],
    devtool:'inline-source-map',
    //配置可访问文件
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,//启用gzip压缩compress
        port:8090
    }
}