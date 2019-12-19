import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClInput } from "mp-colorui"
import Header from '../../components/header'
import Tarbar from '../../components/tarbar'
import  './index.scss'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '待审核'
  }
 
  componentDidMount () {}

  render () { 
    const verbTabs = [{ text: "内容", id: 1 }, { text: "主题", id: 2 }]
    return (
      <View className='index'>
       <Header bgColor='gradualBlue' title='待审核'/>
       <ClInput
        placeholder='请输入搜索内容'
        type='text'
        adjustPosition
        icon={{ iconName: "search", size: 'xsmall' }}
        onIconClick={() => {
          Taro.showToast({
            title: "您点击了图标",
            icon: "none"
          });
        }}
       />
      
      <Tarbar active={0} waitNum={99}/>
      </View>
    )
  }
}
