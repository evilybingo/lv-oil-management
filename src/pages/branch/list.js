import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Space, Button } from 'antd'
import branchActions from '../../action/operation/branch'
import { PlusOutlined } from '@ant-design/icons'
import { CustomSearchForm } from '../../components'
class BranchList extends Component {

  componentWillMount(){
    this.props.getBranchList()
  }
  onFinish = values => {
    console.log('Received values of form: ', values)
  }
  onReset = () => {
    console.log(999)
  }
  render () {
    const columns = [
      {
        title: '机构名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '机构等级',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '管理员',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '账户余额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属上级机构',
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
            <span className='primary-color'>充值</span>
            <span className='primary-color'>回收</span>
            <span className='primary-color'>流水</span>
            <span className='primary-color'>编辑</span>
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
        name: 'branchName',
        label: '机构名称',
        compName: 'Input'
      },
      {
        name: 'branchRank',
        label: '机构等级',
        compName: 'Select',
        optionList: [
          { id: '1', name: '一级' },
          { id: '2', name: '二级' }
        ]
      },
      {
        name: 'higher',
        label: '上级机构',
        compName: 'Input'
      },
      {
        name: 'adminName',
        label: '管理员',
        compName: 'Input',
        labelCol: {
          style: {
            width: 70
          }
        }
      }
    ]
    const btnLayout = {
      span: 16
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
      <div className='branchList'>
        <CustomSearchForm
          searchList={searchList}
          onFinish={this.onFinish}
          onReset={this.onReset}
          btnList={btnList}
          btnLayout={btnLayout}
        />
        <div className='m20'>
          <Button type='primary' value='large' icon={<PlusOutlined />}>
            新增
          </Button>
        </div>

        <Table columns={columns} dataSource={dataSource} />
      </div>
    )
  }
}

BranchList.propTypes = {}

export default connect(state => state, branchActions)(BranchList)
