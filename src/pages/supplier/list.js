import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Space } from 'antd'
import { CustomSearchForm } from '../../components'
import branchActions from '../../action/operation/branch'
import { PlusOutlined } from '@ant-design/icons'
import './supplier.less'

class SupplierList extends Component {
  state = {
    curPage: 1
  }
  componentDidMount () {}
  onFinish = values => {
    console.log('Received values of form: ', values)
  }
  onReset = () => {
    console.log(999)
  }
  changePage = page => {
    this.setState({
      curPage: page
    })
  }
  render () {
    const columns = [
      {
        title: '序号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '供应商名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '供应商类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '业务联系人',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '合作站点',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '资金余额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '授信余额/总额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '返利/积分余额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '批发库存',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '状态',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '更新时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '操作',
        key: 'action',
        width: 200,
        align: 'center',
        render: (text, record) => (
          <Space size='middle'>
            <span className='primary-color'>编辑</span>
            <span className='primary-color'>详情</span>
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
        name: 'supplierName',
        label: '供应商',
        compName: 'Input'
      },

      {
        name: 'supplierType',
        label: '供应商类型',
        compName: 'Select',
        optionList: [
          { id: '1', name: '自建撬装' },
          { id: '2', name: '老吕加油' }
        ]
      },
      {
        name: 'status',
        label: '状态',
        compName: 'Select',
        optionList: [
          { id: '1', name: '全部' },
          { id: '2', name: '启用' },
          { id: '3', name: '停用' }
        ]
      }
    ]

    const pagination = {
      defaultCurrent: 1,
      current: this.state.curPage,
      total: 40,
      onChange: this.changePage,
      pageSize: 20
    }
    const layout = {
      md: { span: 6 },
      sm: { span: 12 },
      xs: { span: 24 }
    }
    return (
      <div className='driverCardList'>
        <CustomSearchForm
          searchList={searchList}
          onFinish={this.onFinish}
          onReset={this.onReset}
          btnLayout={layout}
          layout={layout}
        />
        <div className='m20 flex-btn-list'>
          <Button type='primary' value='large' icon={<PlusOutlined />}>
            新增
          </Button>
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

SupplierList.propTypes = {}

export default connect(state => state, branchActions)(SupplierList)
