import React from 'react'
import { View } from '@tarojs/components'
import { Calendar } from '@nutui/nutui-react-taro'
import { useState, useEffect } from 'react'

import styles from './index.module.less'

const WorkHourFillIndex = () => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [startDate, setStartDate] = useState<undefined | string>(undefined)
    const [calendarList, setCalendarList] = useState<WorkHourFill.CalendarItem[]>([
        {
            id: 1,
            reporter: 1,
            reporterName: '',
            reporterDept: 1,
            reporterDeptName: '',
            beginDate: '2023-08-20',
            endDate: '2023-08-26',
            date: '2023-08-22',
            versionState: 'APPROVED',
            approvalInstanceCode: null
        }
    ])

    const handleDayRender = (date: any) => {
        const year = date?.type === 'active' ? date?.year : date?.preYear
        const month = date?.type === 'active' ? date?.month : date?.preMonth
        const calendarDate = year + '-' + (month >= 10 ? month : '0' + month) + '-' + date?.day
        const calendarItem = calendarList.find((_) => _.date === calendarDate)
        if (calendarItem) {
            const dateClass = 'calendar-render-day ' + calendarItem?.versionState.toLowerCase()
            return <View className={dateClass}>{date?.day}</View>
        }
        return <View className="calendar-render-day">{date?.day}</View>
    }

    const handleDayChange = (params: string) => {
        console.log(params)
    }

    const handleMonthChange = (params: string) => {
        console.log(params)
    }

    const getStartDate = () => {
        const date = new Date()
        const currentYear = date.getFullYear()
        const currentMonth = date.getMonth() + 1
        let startYear = currentYear
        let startMonth = currentMonth - 6
        if (startMonth <= 0) {
            startYear = startYear - 1
            startMonth = startMonth + 12
        }
        const nextStartDate = startYear + '-' + (startMonth >= 10 ? startMonth : '0' + startMonth) + '-01'
        setStartDate(nextStartDate)
        setShowCalendar(true)
    }

    useEffect(() => {
        getStartDate()
    }, [])

    return (
      <View className={styles['work-hour-fill-index']}>
        <View className="calendar-wrapper">
            {
                showCalendar && <Calendar
                    popup={false}
                    showTitle={false}
                    startDate={startDate}
                    renderDay={handleDayRender}
                    onDayClick={handleDayChange}
                    onPageChange={handleMonthChange}
                />
            }
        </View>
      </View>
    )
}
  
export default WorkHourFillIndex