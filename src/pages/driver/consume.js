import React from 'react'
//import { connect } from 'react-redux'
//import moment from 'moment'
import { Table } from 'antd'
import { CustomSearchForm } from '../../components'
import { list } from '../../constants/city'

class DriverConsume extends React.Component {
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

    const changeCity = () => {}

    const columns = [
      {
        title: '订单编号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '司机',
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
        title: '站点类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '用油类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '单价',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '加油量',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '加油金额',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '服务时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属机构',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '供应商',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '状态',
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
        name: 'time',
        label: '加油时间',
        compName: 'RangePicker',
        compProps: {
          showTime: { format: 'HH:mm' },
          style: { width: '100%' },
          format: 'YYYY-MM-DD HH:mm'
        }
      },
      {
        name: 'driverName',
        label: '司机姓名',
        compName: 'Input'
      },

      {
        name: 'phone',
        label: '手机号',
        compName: 'Input'
      },
      {
        name: 'department',
        label: '机构名称',
        compName: 'Input'
      },

      {
        name: 'city',
        label: '加油地点',
        compName: 'Cascader',

        defaultValue: [],
        options: list,
        onChange: changeCity
      },
      {
        name: 'supplier',
        label: '供应商',
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
      <div className='driverCardList'>
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

DriverConsume.propTypes = {}

export default DriverConsume
