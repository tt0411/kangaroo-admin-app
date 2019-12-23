import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header'
import Tarbar from '../../components/tarbar'

export default class Data extends Component {

   config = {
       navigationBarTitleText: '数据分析'
  }
  state = {
    isShowZw: false
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
        this.setState({ isShowZw: true })
    } else if (process.env.TARO_ENV === 'h5') {
        this.setState({ isShowZw: false })
    }
  }
  render() {
    return (
      <View>
        {this.state.isShowZw && <View className='zw' style={{width: '100%', height: '30px', backgroundImage: 'linear-gradient(45deg, #0081ff, #1cbbb4)'}}></View>}
        <Header title='数据分析' bgColor='gradualBlue' />
        <Tarbar active={1}/>
      </View>
    )
  }
}
