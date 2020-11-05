import React from 'react'
//import { connect } from 'react-redux'
//import moment from 'moment'
import { Table, Space } from 'antd'
import { CustomSearchForm } from '../../components'

class FinanceBill extends React.Component {
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
        title: '对账单号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账单类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '供应商名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账单开始时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账单结束时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '本期消费',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '返利消费',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '现金消费',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '授信消费',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '调整金额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '应付总额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '已付金额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账单状态',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '支付状态',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '操作',
        key: 'action',
        width: 240,
        align: 'center',
        render: (text, record) => (
          <Space size='middle'>
            <span className='primary-color'>确认账单</span>
            <span className='primary-color'>调整账单</span>
            <span className='primary-color'>申请付款</span>
          </Space>
        )
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
        name: 'date',
        label: '账单时间',
        compName: 'RangePicker',
        compProps: {
          style: { width: '100%' }
        }
      },
      {
        name: 'supplier',
        label: '供应商名称',
        compName: 'Input'
      },
      {
        name: 'billStatus',
        label: '账单状态',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      },
      {
        name: 'payStatus',
        label: '支付状态',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      }
    ]

    const pagination = {
      defaultCurrent: 1,
      current: this.state.curPage,
      total: 40,
      onChange: this.changePage,
      pageSize: 20
    }
   
    const btnLayout = { span: 16 }
    return (
      <div className='driverCardList'>
        <CustomSearchForm
          searchList={searchList}
          onFinish={onFinish}
          onReset={onReset}
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

FinanceBill.propTypes = {}

export default FinanceBill
