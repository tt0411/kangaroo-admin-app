import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header'
import Tarbar from '../../components/tarbar'

export default class Data extends Component {

   config = {
       navigationBarTitleText: '数据分析'
  }

  render() {
    return (
      <View>
        <Header title='数据分析' bgColor='gradualBlue' />
        <Tarbar active={1}/>
      </View>
    )
  }
}
