import { Component, PropsWithChildren } from 'react'
import './app.css'
import 'uno.css'
import Taro from '@tarojs/taro'

class App extends Component<PropsWithChildren<any>> {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
        Taro.cloud.init({
            env: 'zhen-2g23i0zxf8f9d036',
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
