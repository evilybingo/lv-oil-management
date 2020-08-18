import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Table, Button } from 'antd'
import branchActions from '../../action/operation/branch'
import { CustomSearchForm } from '../../components'
import { list } from '../../constants/city'

class PriceList extends React.Component {
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
        title: '省份',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '市区',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '油品类型',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '单位',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '生效时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '失效时间',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '数据来源',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '创建时间',
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
        label: '生效时间',
        compName: 'CustomTimePicker',
        custom: true,
        format: 'HH:mm:ss',
        handlerFn: {
          dateChange: dateChange,
          timeChange: timeChange
        }
      },
      {
        name: 'oilType',
        label: '油品类型',
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
        <div className='m20'>
          <Button type='primary' value='large'>
            导出
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

PriceList.propTypes = {}

export default connect(state => state, branchActions)(PriceList)
