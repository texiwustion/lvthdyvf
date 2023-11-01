/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';
import Icon from './h5';

export type IconNames = 'API 应用_api-app' | 'vip_vip-one' | '上一步_back' | '下一步_next' | '书籍-打开_book-open' | '删除_delete' | '删除5_delete-five' | '剪切板_clipboard' | '升序排序_sort-amount-up' | '图片上传_upload-picture' | '复制_copy-one' | '复制_copy' | '天平_balance-two' | '导出_export' | '应用菜单_application-menu' | '截屏_screenshot' | '报错_caution' | '搜查_find-one' | '搜索_search' | '播放_play-one' | '星星_star' | '查找_find' | '添加_add-four' | '清除_clear' | '点_dot' | '用户_user' | '筛选_filter' | '继续_go-on' | '设置_setting-two' | '返回_return' | '进度2_pie-two' | '降序排序_sort-amount-down' | '首页_home';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size, 750))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
