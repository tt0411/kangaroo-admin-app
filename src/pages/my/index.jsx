import Taro , { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { ClAvatar, ClTag, ClTabs } from 'mp-colorui'
import Tarbar from '../../components/tarbar'
import './index.scss'

export default class My extends Component {

   config = {
       navigationBarTitleText: '我的'
  }

  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0,
      isShowZw: false,
    }
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
        this.setState({ isShowZw: true })
    } else if (process.env.TARO_ENV === 'h5') {
        this.setState({ isShowZw: false })
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
         {this.state.isShowZw && <View className='zw' style={{width: '100%', height: '30px', backgroundColor: '#ffffff'}}></View> }
        <View className='top'>
        <ClAvatar headerArray={headerArray.slice(0, 1)} shape='round' size='xlarge' shadow />
        <View className='info'>
          <Text className='nameAndSign'>
            <Text className='name'>梦涛</Text>
            <Text className='sign'><ClTag tags={tags.slice(0, 1)} shape='normal' /></Text>
          </Text>
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
         <View id='item1'>
              ITEM1
         </View>
         <View id='item2'>
              ITEM2
         </View>
        </ClTabs>

        <Tarbar active={2} />
      </View>
    )
  }
}
