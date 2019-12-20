import Taro , { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { ClAvatar, ClTag, ClTabs } from 'mp-colorui'
import Tarbar from '../../components/tarbar'
import './index.scss'

export default class My extends Component {

   config = {
       navigationBarTitleText: '我的'
  }

  constructor () {
    super(...arguments)
    this.state = {
      activeIndex: 0
    }
  }

  render() {
    const headerArray = [
     {
       url: 'https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg',
       tag: 'male',
       tagColor: 'blue'
     }
   ]
   const tags = [
    {
      text: '超级管理员',
      color: 'gradualRed'
    }
  ]

  const verbTabs = [
    { text: "已审批内容", id: 'item1'},
    { text: "已审批主题", id: 'item2' },
  ]
    return (
      <View>
        <View className='top'>
        <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='xlarge' shadow />
        <View className='info'>
          <Text className='name'>梦涛 <ClTag tags={tags.slice(0, 1)} shape='normal' /></Text>
          <Text className='phone'>15188211507</Text>
        </View>
        </View>
        <ClTabs
          tabs={verbTabs}
          type="center"
          active={this.state.activeIndex}
          bgColor='white'
          activeColor='blue'
        >
          {verbTabs.map(item => (
            <View key={item.id} id={item.id}>
              {item.text}
            </View>
          ))}
        </ClTabs>

        <Tarbar active={2} />
      </View>
    )
  }
}
