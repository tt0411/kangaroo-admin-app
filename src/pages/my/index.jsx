import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
 // import Header from '../../components/header'
import Tarbar from '../../components/tarbar'

export default class My extends Component {

   config = {
       navigationBarTitleText: '我的'
  }

  render() {
    return (
      <View>
        <Tarbar active={2} />
      </View>
    )
  }
}
