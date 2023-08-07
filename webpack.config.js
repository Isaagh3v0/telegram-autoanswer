const {resolve} = require('path')
const Dotenv = require('dotenv-webpack')

/*
 * BY ENIGMA | DISCORD & TG: nahmnenickname
 * LICENSED BY MIT
 * GITHUB: Isaagh3v0
 */

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'],
                include: resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.ya?ml$/,
                use: ['yaml-loader'],
                include: resolve(__dirname, 'src'),
            },
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    target: 'node',
    node: {
        __dirname: true
        },
    stats: {warnings: false},
    plugins: [
        new Dotenv({
            path: resolve(__dirname)
        })
    ]
};