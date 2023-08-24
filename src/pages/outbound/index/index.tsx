import Taro from '@tarojs/taro';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { View } from '@tarojs/components'
import { Button, InfiniteLoading, Toast, Image, Swipe, Popup } from '@nutui/nutui-react-taro';
import { Search, Uploader, RectRight } from '@nutui/icons-react-taro';
import SearchPopup from '../components/SearchPopup';

import styles from './index.module.less'

const Outbound = () => {

  const [outboundList, setOutboundList] = useState<Outbound.ListItem[]>([])
  const [hasMore, setHasMore] = useState(true)

  const searchPopupRef = useRef<any>()

  useEffect(() => {
    loadMore(null)
  }, [])

  const loadMore = (done: () => void | null) => {
    console.log('loadMore', done)
    setOutboundList([
      {
        "outStorageDate": "2023/08/22",
        "versionState": "APPROVED",
        "ckCode": "CK2023080300020002",
        "downloadUrl": null,
        "outReceivePhone": null,
        "source": "PC",
        "receivePerson": "李松涛",
        "storageName": "CA23-8030002-W仓库",
        "receivePersonId": "578877847502848",
        "receiveDepartment": "研发组",
        "outReceivePerson": null,
        "attachment": "410d7a19015df2f932954f4c31a6e087",
        "projectCode": "202308030002",
        "approvalInstanceCode": "",
        "receiveProject": "李松涛测试领用",
        "id": 104,
        "projectName": "测试回归0803001-1",
        "receiveDepartmentId": "e751a973de4ga1a9",
        "contractCode": "CA23-8030002-W",
        "storageId": "1001A1100000000ELRPC"
      },
      {
        "outStorageDate": "2023/08/17",
        "versionState": "APPROVED",
        "ckCode": "CK2023062800010046",
        "downloadUrl": null,
        "outReceivePhone": null,
        "source": "PC",
        "receivePerson": "李松涛",
        "storageName": "测试0628附件仓库",
        "receivePersonId": "578877847502848",
        "receiveDepartment": "研发组",
        "outReceivePerson": null,
        "attachment": "a667b7439ceba786f1cb2156b7131b1b",
        "projectCode": "202306280001",
        "approvalInstanceCode": "",
        "receiveProject": "李松涛流程测试领用",
        "id": 103,
        "projectName": "测试0628附件",
        "receiveDepartmentId": "e751a973de4ga1a9",
        "contractCode": "PA23-6280001-W",
        "storageId": "1001A1100000000DIFKP"
      }
    ])
    setHasMore(true)
    done?.()
  }


  const handleSearch = () => {
    console.log('handleSearch')
  }

  const handleAdd = () => {
    Taro.navigateTo({
      url: "/pages/outbound/detail/index"
    })
  }

  return (
    <View className={styles['outbound-page']}>
      <View className='page-hd'>
        <View className='t-pl-2'>出库单</View>
        <View className="right-nav">
          <View className='t-flex t-items-center t-justify-start'>
            {/* <Button shape="round" block> */}
            <Search onClick={() => { searchPopupRef.current?.open() }} />
            {/* </Button> */}
            {/* <Button shape="round"  > */}
            <View className='add-btn' onClick={handleAdd}><Uploader /></View>
          </View>
          {/* </Button> */}
        </View>
      </View>
      <View className='outbound-list'>
        <InfiniteLoading
          target="scroll"
          hasMore={hasMore}
          onLoadMore={loadMore}
        >
          {outboundList.map((item, index) => {
            return (
              <Swipe
                key={index}
                rightAction={
                  <Button shape="square" type="danger">
                    删除
                  </Button>
                }
              >
                <View className='list-item'  >
                  <View className="item-hd">{item.outStorageDate}</View>
                  <View className="item-bd t-flex align-items-center t-p-2">
                    <Image className='desc-img' src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" />
                    <View className="text-wrap">
                      <View className='code'>
                        单据编号
                      </View>
                      <View className="name">
                        单据名称等5件
                      </View>
                    </View>
                    <RectRight />
                  </View>
                </View>
              </Swipe>
            )
          })}
        </InfiniteLoading>
      </View>
      {/* 搜索面板 */}
      <SearchPopup ref={searchPopupRef} onSearch={handleSearch} ></SearchPopup>
    </View >

  )
}

export default Outbound