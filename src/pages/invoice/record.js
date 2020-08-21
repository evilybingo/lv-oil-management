

import React from 'react'
//import { connect } from 'react-redux'
//import moment from 'moment'
import { Table, Space, Button } from 'antd'
import { CustomSearchForm } from '../../components'

class InvoiceRecord extends React.Component {
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
        title: '申请时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '发票类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '开票金额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '申请人',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '收件人',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '开票状态',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '发票号码',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '寄送信息',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '供应商',
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
            <span className='primary-color'>详情</span>
            <span className='primary-color'>申请撤回</span>
            <span className='primary-color'>查询物流</span>
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
        label: '消费时间',
        compName: 'RangePicker',
        compProps: {
          style: { width: '100%' },
          showTime:true
        }
      },
      {
        name: 'supplier',
        label: '供应商',
        compName: 'Input'
    },
      {
        name: 'invoiceType',
        label: '发票类型',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      },
      {
        name: 'invoiceStatus',
        label: '开票状态',
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
        <div className='m20'>
            <Button type="primary">导出</Button>
        </div>

        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={pagination}
        />
      </div>
    )
  }
}

InvoiceRecord.propTypes = {}

export default InvoiceRecord

