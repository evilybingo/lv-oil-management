import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Table } from 'antd'
import branchActions from '../../action/operation/branch'
import { CustomSearchForm } from '../../components'
import { list } from '../../constants/city'
/**
 * 销售价维护
 */
class PriceSafeguard extends React.Component {
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
    const timeChange = e => {
      console.log(moment(e).format('HH:mm'))
    }
    const dateChange = e => {
      console.log(moment(e).format('YYYY-MM-DD'))
    }

    const formLayout = {
      labelCol: {
        style: {
          width: 68
        }
      }
    }
    const columns = [
      {
        title: '站点名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '油品类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '结算价',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '销售价',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '发改委价',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '枪标价',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '单位',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '所属供应商',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '省市',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '市区',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '更新时间',
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
        name: 'oilType',
        label: '油品类型',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      },

      {
        name: 'stationName',
        label: '站点名称',
        compName: 'Input'
      },
      {
        name: 'city',
        label: '省市',
        compName: 'Cascader',

        defaultValue: [],
        options: list,
        onChange: changeCity,
        ...formLayout
      },
      {
        name: 'stationType',
        label: '站点类型',
        compName: 'Select',
        optionList: [{ id: '1', name: '全部' }]
      },
      {
        name: 'supplier',
        label: '供应商',
        compName: 'Select',
        labelCol: {
          style: {
            width: 70
          }
        },
        optionList: [{ id: '1', name: '全部' }]
      },
      {
        name: 'time',
        label: '时间',
        compName: 'CustomTimePicker',
        custom: true,
        format: 'HH:mm:ss',
        labelCol: {
          style: {
            width: 68
          }
        },
        handlerFn: {
          dateChange: dateChange,
          timeChange: timeChange
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
    const btnLayout = {
      span: 24
    }
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

PriceSafeguard.propTypes = {}

export default connect(state => state, branchActions)(PriceSafeguard)
