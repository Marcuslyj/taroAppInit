
import React, { useState, useEffect } from 'react'
import { Popup, Cell, Button } from '@nutui/nutui-react-taro'
import { RectLeft, RectRight, MaskClose } from '@nutui/icons-react-taro';
import ListItem from '@/components/form/ListItem'
import { stopPropagation } from '@/utils';

import styles from './index.module.less'

type IProps = {
  value?: {
    projectCode: string;
    projectName: string;
  };
  clearable?: boolean;
  readonly?: boolean;
  onConfirm?: (val: any) => void;
}

interface IListItem {
  projectCode: string;
  projectName: string;
}

const fieldItem = {
  projectCode: '项目编号',
  projectName: '项目名称'

}
const ProjectSelect: React.FC<IProps> = (props) => {

  const { onConfirm } = props

  const [popupShow, setPopupShow] = useState(false)
  const [showText, setShowText] = useState('')

  const [projectList, setProjectList] = useState<IListItem[]>([])

  useEffect(() => {
    // TODO:
    setProjectList([
      {
        projectCode: "202308220002",
        projectName: "物料跟踪数据变更"
      },
      {
        projectCode: "202308220003",
        projectName: "物料跟踪数据变更2物料跟踪数据变更2物料跟踪数据变更2物料跟踪数据变更2"
      }
    ])
  }, [])

  const [selectProject, setSelectProject] = useState<IListItem>()

  const onChangeItem = (checked, item) => {
    if (checked) {
      setSelectProject(item)
      setShowText(item.projectName)
    } else {
      handleClear()
    }
  }

  const handleClear = () => {
    setSelectProject(undefined)
    setShowText('')
  }

  const handleConfirm = () => {
    onConfirm?.(selectProject)
    setPopupShow(false)
  }


  return (
    <div className={styles['project-select']}>
      <div className="show-wrap" onClick={() => setPopupShow(true)}>
        <Cell title={showText ? showText : "请选择"} extra={showText ? <MaskClose onClick={stopPropagation(handleClear)} /> : <RectRight />} align="center"></Cell>
      </div>
      <Popup visible={popupShow} className="t-flex t-flex-col" style={{ width: '100%', height: '100vh' }} position="right" onClose={() => { setPopupShow(false) }} >
        <div className='hd'>
          <RectLeft className='left t-flex t-align-items-center' onClick={() => setPopupShow(false)} />
          <div className='hd-title'>选择项目</div>
        </div>
        <div className='bd'>
          <div className='list'>
            {
              projectList.map(project => {
                return (
                  <ListItem key={project.projectCode} type="radio" dataItem={project} fieldItem={fieldItem}
                    checked={selectProject?.projectCode === project.projectCode}
                    onChange={onChangeItem}>
                  </ListItem>
                )
              })
            }
          </div>
        </div>
        <div className='ft t-flex t-justify-center'>
          <Button type="primary" onClick={handleConfirm}>确定</Button>
        </div>
      </Popup >
    </div >
  )
}

export default ProjectSelect;