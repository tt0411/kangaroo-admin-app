import Taro , { Component } from '@tarojs/taro'
import { View, Audio, Video } from '@tarojs/components'
import { ClText, ClGrid, ClButton } from "mp-colorui"
import './index.scss'

export default class ContentItem extends Component {

  state={}

  render() {
    return (
      <View className='box'>
        <View className='item'>
            <View className='top'>
                <View className='icon'>
                   <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </View>
                <View className='name'>梦涛</View>
                <View className='time'>2019-12-23 13:55</View>
            </View>
            <View className='medium'>
                <View className='contentItem'>
                    <View className='label'>内容：</View>
                    <View className='text'>
                    <ClText text='通过字符串创建 ref 只需要把一个字符串的名称赋给ref prop。然后就通过 this.refs 访问到被定义的组件实例或 DOM 元素（小程序原生组件）。在微信小程序中，如果 ref 的是小程序原生组件，那么相当于使用 createSeletorQuery 取到小程序原生组件实例，如果是在 H5(Web) 环境中使用，那访问到的将是 @tarojs/components 对应组件的组件实例' align='left' size='large' />
                    </View>
                </View>
                <View className='contentItem'>
                    <View className='label'>图片：</View>
                    <View className='text'>
                        <ClGrid mode='square' col={3}>
                            <View className='bg-blue light'>
                            <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                            </View>
                            <View className='bg-brown light'>
                            <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                            </View>
                            <View className='bg-blue light'>
                            <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                            </View>
                        </ClGrid>
                        
                    </View>
                </View>
                
                <View className='contentItem'>
                    <View className='label'>视频：</View>
                    <View className='text'>
                    <Video
                        src='https://kangaroo-app.oss-cn-hangzhou.aliyuncs.com/%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%28%E8%93%9D%E5%85%89%29.mp4'
                        controls={true}
                        autoplay={false}
                        poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                        initialTime='0'
                        id='video'
                        loop={false}
                        />   
                    </View>
                </View>
                <View className='contentItem'>
                    <View className='label'>音频：</View>
                    <View className='text'>
                    <Audio
                        src='https://kangaroo-app.oss-cn-hangzhou.aliyuncs.com/%E5%B0%8F%E9%98%BF%E4%B8%83%20-%20%E9%82%A3%E5%A5%B3%E5%AD%A9%E5%AF%B9%E6%88%91%E8%AF%B4%20%28%E6%AD%A3%E5%BC%8F%E7%89%88%29.mp3'
                        controls={true}
                        autoplay={false}
                        loop={false}
                        initialTime='0'
                        id='video'
                        />
                    </View>
                </View>
            </View>
            <View className='bottom'>
            <ClButton  bgColor='red' long>审核不通过</ClButton>
            <ClButton  bgColor='blue' long>审核通过</ClButton>
            </View>
        </View>
        <View className='item'>
            <View className='top'>
                <View className='icon'>
                   <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                </View>
                <View className='name'>梦涛</View>
                <View className='time'>2019-12-23 13:55</View>
            </View>
            <View className='medium'>
                <View className='contentItem'>
                    <View className='label'>内容：</View>
                    <View className='text'>
                    <ClText text='通过字符串创建 ref 只需要把一个字符串的名称赋给ref prop。然后就通过 this.refs 访问到被定义的组件实例或 DOM 元素（小程序原生组件）。在微信小程序中，如果 ref 的是小程序原生组件，那么相当于使用 createSeletorQuery 取到小程序原生组件实例，如果是在 H5(Web) 环境中使用，那访问到的将是 @tarojs/components 对应组件的组件实例' align='left' size='large' />
                    </View>
                </View>
                <View className='contentItem'>
                    <View className='label'>图片：</View>
                    <View className='text'>
                        <ClGrid mode='square' col={3}>
                            <View className='bg-blue light'>
                            <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                            </View>
                            <View className='bg-brown light'>
                            <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                            </View>
                            <View className='bg-blue light'>
                            <img src='https://mp-yys-1255362963.cos.ap-chengdu.myqcloud.com/head/330.jpg' />
                            </View>
                        </ClGrid>
                        
                    </View>
                </View>
                
                <View className='contentItem'>
                    <View className='label'>视频：</View>
                    <View className='text'>
                    <Video
                        src='https://kangaroo-app.oss-cn-hangzhou.aliyuncs.com/%E6%9D%8E%E8%8D%A3%E6%B5%A9-%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%28%E8%93%9D%E5%85%89%29.mp4'
                        controls={true}
                        autoplay={false}
                        poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                        initialTime='0'
                        id='video'
                        loop={false}
                        />   
                    </View>
                </View>
                <View className='contentItem'>
                    <View className='label'>音频：</View>
                    <View className='text'>
                    <Audio
                        src='https://kangaroo-app.oss-cn-hangzhou.aliyuncs.com/%E5%B0%8F%E9%98%BF%E4%B8%83%20-%20%E9%82%A3%E5%A5%B3%E5%AD%A9%E5%AF%B9%E6%88%91%E8%AF%B4%20%28%E6%AD%A3%E5%BC%8F%E7%89%88%29.mp3'
                        controls={true}
                        autoplay={false}
                        loop={false}
                        initialTime='0'
                        id='video'
                        />
                    </View>
                </View>
            </View>
            <View className='bottom'>
            <ClButton  bgColor='red' long>审核不通过</ClButton>
            <ClButton  bgColor='blue' long>审核通过</ClButton>
            </View>
        </View>
      </View>
    )
  }
}
