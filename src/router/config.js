export const OPENKEY_LIST = {
  '/operation/oilcard': ['1-2'],
  '/supplier/list': ['1-3-1'],
  '/operation/branch': ['1-1']
}
export const ROUTE_LIST = {
  '1-2': '/operation/oilcard',
  '1-3-1': '/supplier/list',
  '1-1': '/operation/branch'
}
export const BREAD_LIST = {
  '/operation/oilcard': ['运营中心', '司机油卡'],
  '/operation/branch': ['运营中心', '下属机构'],
  '/supplier/list': ['运营中心', '供应商管理', '油品供应商']
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
  }
]