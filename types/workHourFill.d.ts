declare namespace WorkHourFill {
  type CalendarItem = {
    id: number;
    reporter: number;
    reporterName: string;
    reporterDept: number;
    reporterDeptName: string;
    beginDate: string;
    endDate: string;
    date: string;
    versionState: string;
    approvalInstanceCode: null | string;
  };
}
