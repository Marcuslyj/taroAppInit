import React, { useState } from "react";
import { Popup, Form, Button, Picker, Input, Cascader, Cell } from "@nutui/nutui-react-taro"
import { View } from '@tarojs/components'
type IProps = {
  visible: boolean;
  onSearch: (obj: any) => void;
  onClose?: (val: boolean) => void;
}

const pickerOptions = []
const SearchPopup: React.FC<IProps> = (props) => {
  const { visible, onSearch } = props

  const [isVisibleDemo5, setIsVisibleDemo5] = useState(false)
  const [optionsDemo5, setOptionsDemo5] = useState([
    { value: '北京', text: '北京', id: 1, pidd: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pidd: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pidd: 11 },
    { value: '广东省', text: '广东省', id: 2, pidd: null },
    { value: '广州市', text: '广州市', id: 21, pidd: 2 }
  ])
  const [convertConfigDemo5, setConvertConfigDemo5] = useState({
    topId: null,
    idKey: 'id',
    pidKey: 'pidd',
    sortKey: ''
  })

  return (
    <Popup visible={visible} style={{ height: 'auto' }} position="top" onClose={() => { props?.onClose?.(false) }} >
      <Form
        // style={{ '--nutui-form-item-label-width': '120px' }}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button type="default" >
              取消
            </Button>
            <Button className="t-ml-10">
              重置
            </Button>
            <Button type="primary" className="t-ml-[10px]">
              确定
            </Button>
          </div>
        }
      // onFinish={(values) => submitSucceed(values)}
      // onFinishFailed={(values, errors) => submitFailed(errors)}
      >
        <Form.Item
          label="仓库"
          name="picker"
          trigger="onChange"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            // Cascader ref 没有暴露出来。。
            setIsVisibleDemo5(true)
          }}
        >
          <View>
            <Cell title="来11"></Cell>
            <Cell title="来了"></Cell>
          </View>
          {/* <Cascader
            visible={isVisibleDemo5}
            title="选择仓库"
            options={optionsDemo5}
            format={convertConfigDemo5}
            closeable
            onClose={() => { setIsVisibleDemo5(false) }}
          >
            {(value: any) => {
              console.log(value)
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? [].filter((po) => po.value === value[0])[0]
                        ?.text
                      : '请选择'
                  }
                  align="center"
                />
              )
            }}
          </Cascader> */}
        </Form.Item>

        <Form.Item
          label="Picker"
          name="picker"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            ref.open()
          }}
        >
          <Picker options={[pickerOptions]}>
            {(value: any) => {
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? pickerOptions.filter((po) => po.value === value[0])[0]
                        ?.text
                      : 'Please select'
                  }

                  align="center"
                />
              )
            }}
          </Picker>
        </Form.Item>

        <Form.Item label="操作人" name="receivePerson">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="单据编号" name="ckCode">
          <Input placeholder="请输入" />
        </Form.Item>
      </Form >

    </Popup >


  )
}

export default SearchPopup