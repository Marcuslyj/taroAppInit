import React, { useState, ForwardRefRenderFunction, useImperativeHandle } from "react";
import { Popup, Form, Button, Picker, Input, Cell, Space } from "@nutui/nutui-react-taro"
import ProjectSelect from "./ProjectSelect";

type IProps = {
  onSearch: (obj: any) => void;
}

const storageOptions = [
  {
    value: "1",
    text: '仓库1'
  },
  {
    value: "2",
    text: '仓库2'
  }
]
const InnerSearchPopup: ForwardRefRenderFunction<{ open: () => void }, IProps> = (props, ref) => {
  const { onSearch } = props

  useImperativeHandle(ref, () => ({
    open: openPopup
  }))

  const form = Form.useForm()

  const [visible, setVisible] = useState(false)

  const openPopup = () => {
    setVisible(true)
  }

  const handleSearch = (values) => {
    console.log('values:', values)
    onSearch(values)
  }

  return (
    <Popup visible={visible} style={{ height: 'auto' }} position="top" onClose={() => setVisible(false)}>
      <Form
        ref={form}
        style={{ '--nutui-form-item-label-width': '120px' }}
        onFinish={handleSearch}
        footer={
          <Space className="t-flex t-justify-center t-w-100">
            <Button type="default" onClick={() => setVisible(false)}>
              取消
            </Button>
            <Button formType="reset" type="default">
              重置
            </Button>
            <Button formType="submit" type="primary">
              确定
            </Button>
          </Space>
        }
      >
        <Form.Item
          label="项目"
          name="project"
          trigger="onConfirm"
          getValueFromEvent={(values) => { return values?.projectCode }}
        >
          <ProjectSelect />
        </Form.Item>
        {/* <Form.Item
          label="仓库"
          name="picker"
          trigger="onConfirm"
          // getValueFromEvent={(...args) => args[1]}
          getValueFromEvent={(...args) => { return args[1] }}
          onClick={(event, ref: any) => {
            ref.open()
          }}
        >
          <Picker options={[storageOptions]} onConfirm={(value) => { console.log('confirm2:', value) }}>
            {(value: any) => {
              console.log("value:", value)
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '1',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? storageOptions.filter((po) => po.value === value[0])[0]
                        ?.text
                      : '请选择'
                  }
                  align="center"
                />
              )
            }}
          </Picker>
        </Form.Item> */}
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

const SearchPopup = React.forwardRef<
  { open: () => void }, IProps
>(InnerSearchPopup)

export default SearchPopup