declare namespace Outbound {
  interface ListItem {
    id: number;
    ckCode: string;
    projectCode: string;
    projectName: string;
    contractCode: string;
    outStorageDate: string;
    storageName: string;
    storageId: string;
    receiveProject: string;
    receiveDepartment: string;
    receiveDepartmentId: string;
    receivePerson: string;
    receivePersonId: string;
    attachment: string;
    approvalInstanceCode: string;
    versionState: string;
    source: string;
    outReceivePerson: string;
    outReceivePhone: string;
    downloadUrl: string;
  }
}
