import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Vip() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='vip'>
      <Text>Hello world!</Text>
    </View>
  )
}
