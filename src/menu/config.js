export const list = [
  {
    id: '1',
    name: '运营中心',
    children: [
      {
        id: '1-1',
        name: '下属机构'
      },
      {
        id: '1-2',
        name: '司机油卡'
      },
      {
        id: '1-3',
        name: '供应商管理',
        children: [
          {
            id: '1-3-1',
            name: '油品供应商'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '财务中心',
    children: [
      {
        id: '2-1',
        name: '当前公司账户'
      },
      {
        id: '2-2',
        name: '应付账单'
      },
      {
        id: '2-3',
        name: '开票申请',
        children: [
          {
            id: '2-3-1',
            name: '申请发票'
          },
          {
            id: '2-3-2',
            name: '开票记录查询'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: '系统设置',
    children: [
      {
        id: '3-1',
        name: '系统用户'
      }
    ]
  }
]
