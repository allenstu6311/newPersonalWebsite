const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue/]
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.pdf$/i,
                loader: 'file-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                      loader: 'url-loader', // 將 file-loader 更改為 url-loader
                      options: {
                        name: '[name].[ext]',
                      },
                    },
                  ],
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, 'src/assets/image')
        },
        extensions: ['.ts', '.js', '.vue'],
    },

    plugins: [
        new VueLoaderPlugin()
    ],
}