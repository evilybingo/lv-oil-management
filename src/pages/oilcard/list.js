import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Space, Button } from 'antd'
import branchActions from '../../action/operation/branch'
import { CustomSearchForm } from '../../components'
import { PlusOutlined } from '@ant-design/icons'

class DriverOilCard extends Component {
  state = {
    curPage: 1
  }
  onFinish = values => {
    console.log('Received values of form: ', values)
  }
  onReset = () => {
    console.log(999)
  }
  componentDidMount () {}
  changePage = page => {
    this.setState({
      curPage: page
    })
  }
  render () {
    const columns = [
      {
        title: '司机姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '手机号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '车牌号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '自有油费',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '外请油费',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '状态',
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
            <Button>充值</Button>
            <Button>回收</Button>
            <Button>设置</Button>
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
        name: 'driverName',
        label: '司机姓名',
        compName: 'Input'
      },
      {
        name: 'phone',
        label: '手机号',
        compName: 'Input',
        labelCol: {
          style: {
            width: 70
          }
        }
      },
      {
        name: 'carNum',
        label: '车牌号',
        compName: 'Input'
      },
      {
        name: 'driverType',
        label: '司机类型',
        compName: 'Select',
        optionList: [
          { id: '1', name: '全部' },
          { id: '2', name: '自有' }
        ]
      },
      {
        name: 'cardStatus',
        label: '油卡状态',
        compName: 'Input'
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
    return (
      <div className='driverCardList'>
        <CustomSearchForm
          searchList={searchList}
          onFinish={this.onFinish}
          onReset={this.onReset}
          btnList={btnList}
        />
        <div className='m20'>
          <Button type='primary' value='large' icon={<PlusOutlined />}>
            开卡
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

DriverOilCard.propTypes = {}

export default connect(state => state, branchActions)(DriverOilCard)
