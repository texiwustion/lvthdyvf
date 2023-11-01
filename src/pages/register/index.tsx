import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Register() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='register'>
      <Text>Hello world!</Text>
    </View>
  )
}
