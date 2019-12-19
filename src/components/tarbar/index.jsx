import Taro , { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { ClTabBar } from "mp-colorui"

export default class Tarbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
        current: this.props.active
    } 
  }
 
  checkPage(value) {
   this.setState({
     current: value
   })
    switch(value) {
      case 0:
        Taro.redirectTo({
          url: '../../pages/index/index'
        })
      break;
      case 1:
        Taro.redirectTo({
          url: '../../pages/datas/index'
        }) 
      break; 
      case 2: 
        Taro.redirectTo({
          url: '../../pages/my/index'
        })
      break;
      default:
      break;
    }
  }
  render() {
    const { waitNum } = this.props 
    const defaultTabs = [
    {
      badge: waitNum || false,
      icon: 'edit',
      title: '待审核'
    },
    {
      badge: false,
      icon: 'rank',
      title: '数据分析'
    },
    {
      badge: false,
      icon: 'my',
      title: '我的'
    }
  ]
    return (
      <View>
        <ClTabBar active={this.state.current} tabs={defaultTabs} fix='true' onClick={this.checkPage.bind(this)}/>
      </View>
    );
  }
}
