
import React from 'react';
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro';
import { Search, Uploader } from '@nutui/icons-react-taro';

import styles from './index.module.less'

const Outbound = () => {
  return (
    <View className={styles['outbound-page']}>
      <View className={styles['page-hd']}>
        <Button className={styles['search-btn']} type="default"><Search />搜索</Button>
        <Uploader className={styles['search-btn']} />
      </View>
    </View>
  )
}

export default Outbound