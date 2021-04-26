import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackConfig = (): { output: { path: string; filename: string; publicPath: string }; mode: string; devtool: string; devServer: { historyApiFallback: boolean; overlay: boolean; port: number; stats: { assets: boolean; children: boolean; chunks: boolean; warnings: boolean; timings: boolean; publicPath: boolean; version: boolean; hash: boolean; modules: boolean }; contentBase: string }; entry: string; resolve: { extensions: string[]; alias: { components: string } }; plugins: HtmlWebpackPlugin[]; module: { rules: ({ test: RegExp; use: { loader: string }; exclude: RegExp } | { test: RegExp; use: string[] } | { test: RegExp; use: string[] } | { test: RegExp; use: { loader: string; options: { name: string } }[] } | { test: RegExp; loader: string; options: { transpileOnly: boolean }; exclude: RegExp })[] } } => ({
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            components: path.resolve(__dirname, './src/components/'),
        },
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        publicPath: 'build',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /dist/,
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        port: 3000,
        overlay: true,
        stats: {
            assets: false,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: false,
            version: false,
            warnings: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
})
export default webpackConfig
