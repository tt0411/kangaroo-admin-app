import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'pages/index/index',
      'pages/datas/index',
      'pages/my/index'
    ],
    // tabBar: {
    //   color: "#8a8a8a",
    //   selectedColor: "#0081ff",
    //   backgroundColor: "#FBFBFB",
    //   borderStyle: "white",
    //   list: [{
    //     pagePath: "pages/index/index",
    //     text: "待办",
    //     iconPath: "../src/static/image/index.png",
    //     selectedIconPath: "../src/static/image/selectedIndex.png"
    //   },
    //   {
    //     pagePath: "pages/datas/index",
    //     text: "数据分析",
    //     iconPath: "../src/static/image/data.png",
    //     selectedIconPath: "../src/static/image/selectedData.png"
    //   },
    //   {
    //     pagePath: "pages/my/index",
    //     text: "我的",
    //     iconPath: "../src/static/image/my.png",
    //     selectedIconPath: "../src/static/image/selectedMy.png"
    //   }
    // ]
    // },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '袋鼠空间',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
