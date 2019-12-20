import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClTabs, ClSearchBar } from "mp-colorui"
import Header from '../../components/header'
import Tarbar from '../../components/tarbar'
import  './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '待审核'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      activeIndex: 0
    }
  }

  componentDidMount () {}

  handleChange (value) {
    this.setState({ value })
  }

  onSearch(value) {
    if(!value) {
       Taro.showToast({
        title: '请填写搜索内容',
        icon: 'none'
      })
    }
   
  }
  // checkTabs(index) {
  //   this.setState({
  //     activeIndex: index
  //   })
  // }

  render () { 
    const verbTabs = [
      { text: "内容", id: 'item1'},
      { text: "主题", id: 'item2' },
    ]
    const {activeIndex, value} = this.state
    return (
      <View className='index'>
       <Header bgColor='gradualBlue' title='待审核'/>
       <ClSearchBar
          shape='round'
          bgColor='gradualBlue'
          rightButtonColor='black'
          rightTextColor='white'
          placeholder='请填写搜索内容'
          leftIcons={[
            'emoji'
          ]}
          value={value}
          onIconClick={() => {
            Taro.showToast({
              title: '你好',
              icon: 'none'
            })
          }}
          onInput={this.handleChange.bind(this)}
          onSearch={value => {
            this.onSearch(value)
          }}
        />
      <ClTabs
        tabs={verbTabs}
        type="center"
        active={activeIndex}
        bgColor='white'
        activeColor='blue'
      >
        {verbTabs.map(item => (
          <View key={item.id} id={item.id}>
            {item.text}
          </View>
        ))}
      </ClTabs>

      <Tarbar active={0} waitNum={99}/>
      </View>
    )
  }
}
