import { useState } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.less'

export default function Index() {
  const [selected, setSelected] = useState(0)
  const color = '#000000'
  const selectedColor = '#DC143C'
  const list = [
    {
      pagePath: '/pages/index/index',
      selectedIconPath: '../images/tabbar_home_on.png',
      iconPath: '../images/tabbar_home.png',
      text: '首页'
    },
    {
      pagePath: '/pages/cate/index',
      selectedIconPath: '../images/tabbar_cate_on.png',
      iconPath: '../images/tabbar_cate.png',
      text: '分类'
    },
    {
      pagePath: '/pages/cartShop/index',
      selectedIconPath: '../images/tabbar_cart_on.png',
      iconPath: '../images/tabbar_cart.png',
      text: '购物车'
    },
    {
      pagePath: '/pages/my/index',
      selectedIconPath: '../images/tabbar_my_on.png',
      iconPath: '../images/tabbar_my.png',
      text: '个人中心'
    }
  ]

  const switchTab = (index, url) => {
    setSelected(index)
    Taro.switchTab({ url })
  }
console.log('CustomTabBar');
  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {list.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(index, item.pagePath)}>
            <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
            <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}