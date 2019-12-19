import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClNavBar } from "mp-colorui"

export default class Header extends Component {

  render() {
    const { title, bgColor } = this.props
    return (
      <View>
        <ClNavBar
          bgColor={bgColor}
          title={title}
        />
      </View>
    )
  }
}
