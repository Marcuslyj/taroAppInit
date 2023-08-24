
import React from 'react'
import { Cell, Checkbox } from '@nutui/nutui-react-taro'
import styles from './index.module.less'
import { makeObj2Arr } from '@/utils';
import { get } from 'lodash-es'

interface IProps {
  type: 'check' | 'radio';
  checked?: boolean;
  dataItem: object;
  fieldItem: object;
  onChange?: (checked: boolean, obj: any) => void;
}

const ListItem: React.FC<IProps> = (props) => {

  const { checked, dataItem = {}, fieldItem = {}, onChange } = props


  return (
    <Cell
      title={
        <div className={styles['list-item']} onClick={() => { console.log('onClick') }}>
          <div className="icon-wrap">
            <Checkbox
              className="test"
              label=""
              defaultChecked={checked}
              onChange={(val) => onChange?.(val, dataItem)}
            />
          </div>
          <div className="desc t-flex-1">
            {
              makeObj2Arr(dataItem).map((item, i) => {
                return (
                  <div key={i} className="desc-one">
                    <span className="t-flex-shrink-0" >{get(fieldItem, item[0], '')}：</span>
                    <span >{item[1]}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    />
  )
}


export default ListItem