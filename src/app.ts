import { Component, PropsWithChildren } from 'react'
import './app.css'
import 'uno.css'
import Taro from '@tarojs/taro'

class App extends Component<PropsWithChildren<any>> {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
        Taro.cloud.init({
            // env: '填写自己的云环境ID',
            traceUser: true
        })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
