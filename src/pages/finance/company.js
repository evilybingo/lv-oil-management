import React from 'react'
//import { connect } from 'react-redux'
//import moment from 'moment'
import { Table, Card } from 'antd'
import { CustomSearchForm } from '../../components'
import './company.less'
class CurcompanyAccount extends React.Component {
  state = {
    curPage: 1
  }
  changePage = page => {
    this.setState({
      curPage: page
    })
  }
  render () {
    const onFinish = values => {
      console.log('Received values of form: ', values)
    }
    const onReset = () => {
      console.log(999)
    }

    const columns = [
      {
        title: '交易时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '交易类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '交易金额(元)',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '资金方向',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账户余额(元)',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '交易对象',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '车牌号码',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '司机信息',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '备注',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '操作人',
        dataIndex: 'name',
        key: 'name'
      }
    ]
    const dataSource = [
      {
        key: 1,
        name: '1'
      }
    ]
    const searchList = [
      {
        name: 'tradeType',
        label: '交易类型',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      },
      {
        name: 'financeDre',
        label: '资金方向',
        compName: 'Select',
        optionList: [
          { id: '0', name: '全部' },
          { id: '1', name: '收入' },
          { id: '2', name: '支出' }
        ]
      },
      {
        name: 'time',
        label: '交易时间',
        compName: 'DatePicker',
        compProps: {
          style: { width: '100%' },
          format: 'YYYY-MM-DD'
        }
      },
      {
        name: 'tradeObject',
        label: '交易对象',
        compName: 'Input',
        compProps: {
          placeholder: '输入上级机构或油卡编号'
        }
      },

      {
        name: '车牌号码',
        label: '手机号',
        compName: 'Input',
        labelCol: {
          style: {
            width: 68
          }
        }
      },
      {
        name: 'department',
        label: '机构名称',
        compName: 'Input',
        compProps: {
          placeholder: '司机姓名或手机号'
        }
      }
    ]

    const pagination = {
      defaultCurrent: 1,
      current: this.state.curPage,
      total: 40,
      onChange: this.changePage,
      pageSize: 20
    }
    const btnList = [
      {
        id: 'submit',
        type: 'primary',
        value: 'large',
        htmlType: 'submit',
        name: '查询'
      },
      {
        id: 'reset',
        value: 'large',
        name: '重置'
      },
      {
        id: 'out',
        value: 'large',
        name: '导出'
      }
    ]
    const btnLayout = { span: 24 }
    return (
      <div className='CurcompanyAccount'>
        <Card className='curAccountSum'>
          账户可分配余额：5,998,382,146.07 元
        </Card>
        <CustomSearchForm
          searchList={searchList}
          onFinish={onFinish}
          onReset={onReset}
          btnList={btnList}
          btnLayout={btnLayout}
        />
        <div className='m20'></div>

        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={pagination}
        />
      </div>
    )
  }
}

CurcompanyAccount.propTypes = {}

export default CurcompanyAccount
