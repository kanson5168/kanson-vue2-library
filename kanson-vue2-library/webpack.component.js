const { name } = require('file-loader')
const glob = require('glob') //node自带的，可以遍历文件夹
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const list = {}
// entry需要的格式：
// {
//   demo:'./components/lib/demo/index.js'
// }
// 获取componemt里面的组件名
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`) //拿到dirPath下的所有index.js文件的路径，返回的是数组，里面存是路径
  for (let file of files) {
    console.log("file", file);
    const component = file.split(/[/.]/)[2]
    console.log("component", component);
    list[component] = `./${file}`
  }
  console.log("list", list);

}
makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].umd.js', //最终会拿到一个demo.umd.js
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      }
    ]
  },
}