import React from 'react'
import { connect } from 'react-redux'
//import moment from 'moment'
import { Table } from 'antd'
import branchActions from '../../action/operation/branch'
import { CustomSearchForm } from '../../components'
import { list } from '../../constants/city'

class PriseInventory extends React.Component {
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

    const formLayout = {
      labelCol: {
        style: {
          width: 68
        }
      }
    }
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
        title: '油罐编号',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '油品',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '库存率（%）',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '液位仪库存（L）',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '理论库存（L）',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属供应商',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '详细地址',
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
        label: '时间',
        compName: 'DatePicker',
        compProps: {
          style: {
            width: '100%'
          },
          showTime: {
            format: 'HH:mm'
          }
        }
      },
      {
        name: 'stationName',
        label: '站点名称',
        compName: 'Input'
      },

      {
        name: 'supplierName',
        label: '供应商名称',
        compName: 'Input'
      },
      {
        name: 'status',
        label: '状态',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      },

      {
        name: 'city',
        label: '省市',
        compName: 'Cascader',

        defaultValue: [],
        options: list,
        onChange: changeCity,
        ...formLayout
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

PriseInventory.propTypes = {}

export default connect(state => state, branchActions)(PriseInventory)
