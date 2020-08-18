import React, { Component } from 'react'
import { Table, Space } from 'antd'
import { list } from '../../constants/city'
import { CustomSearchForm } from '../../components'
//import { PlusOutlined } from '@ant-design/icons'

class StationList extends Component {
  state = {
    curPage: 1
  }
  onFinish = values => {
    console.log('Received values of form: ', values)
  }
  onReset = () => {
    console.log(999)
  }
  changeCity () {}
  render () {
    const columns = [
      {
        title: '站点编号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '站点名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属供应商',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '定位标注',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属省市',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '市区',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '详细地址',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '下单方式',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '站点类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '状态',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '最近更新',
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
            <a>编辑</a>
            <a>详情</a>
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
        name: 'stationName',
        label: '站点名称',
        compName: 'Input'
      },

      {
        name: 'city',
        label: '省市区',
        compName: 'Cascader',
        defaultValue: [],
        options: list,
        onChange: this.changeCity
      },
      {
        name: 'stationType',
        label: '站点类型',
        compName: 'Select',
        optionList: [
          { id: '1', name: '全部' },
          { id: '2', name: '加油站' },
          { id: '3', name: '撬装' }
        ]
      },
      {
        name: 'mode',
        label: '开放模式',
        compName: 'Select',
        optionList: [
          { id: '1', name: '全部' },
          { id: '2', name: '加油站' },
          { id: '3', name: '撬装' }
        ]
      },
      {
        name: 'supplier',
        label: '供应商',
        compName: 'Select',
        optionList: [
          { id: '1', name: '全部' },
          { id: '2', name: '找油网' }
        ]
      },
      {
        name: 'stationStatus',
        label: '站点状态',
        compName: 'Select',
        optionList: [
          { id: '0', name: '全部' },
          { id: '1', name: '上线' },
          { id: '2', name: '下线' }
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
    const btnLayout={
      span:24
    }
    return (
      <div className='driverCardList'>
       
        <CustomSearchForm
          searchList={searchList}
          onFinish={this.onFinish}
          onReset={this.onReset}
          btnList={btnList}
          btnLayout={btnLayout}
        />
        <div className='m20 ' />

        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={pagination}
        />
      </div>
    )
  }
}

export default StationList
