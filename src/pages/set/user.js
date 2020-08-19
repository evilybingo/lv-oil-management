import React from 'react'
//import { connect } from 'react-redux'
//import moment from 'moment'
import { Table, Space, Button } from 'antd'
import { CustomSearchForm } from '../../components'
import { PlusOutlined } from '@ant-design/icons'
class SystemUser extends React.Component {
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
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '手机号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '邮箱地址',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '登陆账号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '工作职务',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属机构',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '状态',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '最近一次登陆时间',
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
            <span className='primary-color'>停用</span>
            <span className='primary-color'>更多</span>
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
        name: 'name',
        label: '姓名',
        compName: 'Input'
      },
      {
        name: 'phone',
        label: '手机号',
        compName: 'Input',
        labelCol:{
            style:{
                width:70
            }
        }
      },
      {
        name: 'account',
        label: '登录账号',
        compName: 'Input'
      },

      {
        name: 'status',
        label: '状态',
        compName: 'Select',
        optionList: [
          { id: '0', name: '全部' },
          { id: '1', name: '正常' },
          { id: '2', name: '停用' }
        ]
      },
      {
        name: 'department',
        label: '所属机构',
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

    return (
      <div className='driverCardList'>
        <CustomSearchForm
          searchList={searchList}
          onFinish={onFinish}
          onReset={onReset}
        />
        <div className='m20'>
          <Button type='primary' icon={<PlusOutlined />}>
            新建
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

SystemUser.propTypes = {}

export default SystemUser
