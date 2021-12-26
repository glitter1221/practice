const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일 빌드
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 파일을 별도로 분리해줌
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // webpack 빌드 시마다 다 지우고 새로 빌드

//webpack cli 실행 명령어 : npx webpack

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.jpg$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } } ] }  
            // 이미지 파일 빌드, [name].[ext]는 원본 파일의 이름, 확장자, 해쉬값을(중복 방지인 것 같은데) 따라가도록 함
            // 크기가 작을 땐 텍스트로 저장하는 url-loader가 있음
        ]        
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }), // template을 넣지 않을 시 빌드 후의 html body 내용이 없음
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ]
}