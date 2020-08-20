export const OPENKEY_LIST = {
  '/operation/oilcard': ['1-2'],
  '/supplier/list': ['1-3-1'],
  '/operation/branch': ['1-1'],
  '/station/list': ['1-4-1'],
  '/inventory/prise': ['1-5-1'],
  '/price/list': ['1-6-1'],
  '/price/safeguard': ['1-6-2'],
  '/driver/consume': ['1-7-1'],
  '/finance/company': ['2-1'],
  '/finance/bill': ['2-2'],
  '/invoice/apply': ['2-3-1'],
  '/invoice/record': ['2-3-2'],
  '/set/user': ['3-1']
}

export const BREAD_LIST = {
  '/operation/oilcard': ['运营中心', '司机油卡'],
  '/operation/branch': ['运营中心', '下属机构'],
  '/supplier/list': ['运营中心', '供应商管理', '油品供应商'],
  '/station/list': ['运营中心', '站点管理', '站点列表'],
  '/inventory/prise': ['运营中心', '库存管理', '撬装库存查询'],
  '/price/list': ['运营中心', '价格管理', '发改委挂牌价'],
  '/price/safeguard': ['运营中心', '价格管理', '销售价维护'],
  '/driver/consume': ['运营中心', '统计查询', '消费记录'],
  '/finance/company': ['财务中心', '当前公司账户'],
  '/finance/bill': ['财务中心', '应付账单'],
  '/invoice/apply': ['财务中心', '发票管理', '申请发票'],
  '/set/user': ['系统设置', '系统用户']
}

export const ROUTE_MENU_LIST = {
  '1-2': {
    url: '/operation/oilcard',
    title: '司机油卡'
  },
  '1-3-1': {
    url: '/supplier/list',
    title: '油品供应商'
  },
  '1-1': {
    url: '/operation/branch',
    title: '下属机构'
  },
  '1-4-1': {
    url: '/station/list',
    title: '站点列表'
  },
  '1-5-1': {
    url: '/inventory/prise',
    title: '撬装库存查询'
  },
  '1-6-1': {
    url: '/price/list',
    title: '发改委挂牌价'
  },
  '1-6-2': {
    url: '/price/safeguard',
    title: '销售价维护'
  },
  '1-7-1': {
    url: '/driver/consume',
    title: '消费记录'
  },
  '2-1': {
    url: '/finance/company',
    title: '当前公司账户'
  },
  '2-2': {
    url: '/finance/bill',
    title: '应付账单'
  },
  '2-3-1': {
    url: '/invoice/apply',
    title: '发票申请'
  },
  '2-3-2': {
    url: '/invoice/record',
    title: '开票记录查询'
  },
  '3-1': {
    url: '/set/user',
    title: '用户管理'
  }
}

export const ROOT_SUB_MENU_KEY = ['1', '2', '3']

export const routerConfig = [
  {
    name: 'Home',
    path: '/',
    page: 'home',
    exact: true
  },
  {
    name: 'BranchList',
    path: '/operation/branch',
    page: 'branch/list',
    exact: true
  },
  {
    name: 'OilCardList',
    path: '/operation/oilcard',
    page: 'oilcard/list',
    exact: true
  },
  {
    name: 'SupplierList',
    path: '/supplier/list',
    page: 'supplier/list',
    exact: true
  },
  {
    name: 'StationList',
    path: '/station/list',
    page: 'station/list',
    exact: true
  },
  {
    name: 'PriseInventory',
    path: '/inventory/prise',
    page: 'inventory/prise',
    exact: true
  },
  {
    name: 'PriceList',
    path: '/price/list',
    page: 'price/list',
    exact: true
  },
  {
    name: 'PriceSafeguard',
    path: '/price/safeguard',
    page: 'price/safeguard',
    exact: true
  },
  {
    name: 'DriverConsume',
    path: '/driver/consume',
    page: 'driver/consume',
    exact: true
  },
  {
    name: 'CurcompanyAccount',
    path: '/finance/company',
    page: 'finance/company',
    exact: true
  },
  {
    name: 'FinanceBill',
    path: '/finance/bill',
    page: 'finance/bill',
    exact: true
  },
  {
    name: 'ApplyInvoice',
    path: '/invoice/apply',
    page: 'invoice/apply',
    exact: true
  },
  {
    name: 'InvoiceRecord',
    path: '/invoice/record',
    page: 'invoice/record',
    exact: true
  },
  {
    name: 'SystemUser',
    path: '/set/user',
    page: 'set/user',
    exact: true
  }
]
