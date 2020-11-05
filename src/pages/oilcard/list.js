import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Space, Button } from 'antd'
import branchActions from '../../action/operation/branch'
import { CustomSearchForm, CustomModal } from '../../components'
import { setMenuList } from '../../utils/common'
import { PlusOutlined } from '@ant-design/icons'

class DriverOilCard extends Component {
  state = {
    curPage: 1,
    payVisible: false,
    recycleVisible: false,
    setVisible: false
  }
  onFinish = values => {
    console.log('Received values of form: ', values)
  }
  showModal = type => {
    this.setState({
      [type]: true
    })
  }
  onReset = () => {
    console.log(999)
  }
  payCancel = () => {
    this.setState({
      payVisible: false,
      recycleVisible: false,
      setVisible: false
    })
  }
  payOk = val => {
    console.log(val, 888)
  }
  componentDidMount () {}
  changePage = page => {
    this.setState({
      curPage: page
    })
  }
  openCard = () => {
    const menus = setMenuList({ url: '/oilcard/open', title: '新司机开卡' })
    this.props.history.replace('/oilcard/open')
    this.props.getMenuItem(menus)
  }
  render () {
    const { recycleVisible, payVisible, curPage, setVisible } = this.state
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
            <span
              className='primary-color cursor-pointer'
              onClick={this.showModal.bind(null, 'payVisible')}
            >
              充值
            </span>
            <span
              className='primary-color cursor-pointer'
              onClick={this.showModal.bind(null, 'recycleVisible')}
            >
              回收
            </span>
            <span
              className='primary-color cursor-pointer'
              onClick={this.showModal.bind(null, 'setVisible')}
            >
              设置
            </span>
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
      current: curPage,
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
    const autoLayout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      }
    }
    const borderList = [
      {
        style: {
          marginBottom: 24,
          borderTop: '1px solid #eee'
        }
      }
    ]
    const payFieldLists = [
      {
        id: 'cardPay',
        list: [
          {
            id: 'cardNumber',
            colspan: 12,
            itemProps: {
              label: '油卡编号',
              ...autoLayout
            },
            text: '653657453'
          },
          {
            id: 'drivername',
            colspan: 12,
            itemProps: {
              label: '司机姓名',
              ...autoLayout
            },
            text: '653657453'
          },
          {
            id: 'phone',
            colspan: 12,
            itemProps: {
              label: '手机号',
              ...autoLayout
            },
            text: '15678765444'
          },
          {
            id: 'balance',
            colspan: 12,
            itemProps: {
              label: '当前外请油费余额',
              labelCol: {
                span: 12
              },
              wrapperCol: {
                span: 12
              }
            },
            text: '343.23 元'
          },
          ...borderList,
          {
            id: 'fuelType',
            comp: 'Select',
            colspan: 12,
            itemProps: {
              name: 'fuelType',
              label: '油费类型',
              ...autoLayout
            },
            optionList: [
              {
                value: '1',
                name: '自有'
              },
              {
                value: '2',
                name: '外请'
              }
            ],

            compProps: {
              placeholder: '请选择'
            }
          },

          {
            id: 'curPay',
            comp: 'Input',
            colspan: 12,
            itemProps: {
              name: 'curPay',
              label: '本次充值',
              required: true,
              rules: [{ required: true, message: '请填写充值金额' }],
              ...autoLayout
            },
            compProps: {
              addonAfter: '元'
            }
          },
          ...borderList,
          {
            id: 'start',
            colspan: 12,
            comp: 'Input',
            itemProps: {
              name: 'start',
              label: '出发地',
              ...autoLayout
            },
            compProps: {
              maxLength: 30
            }
          },
          {
            id: 'end',
            colspan: 12,
            comp: 'Input',
            itemProps: {
              name: 'end',
              label: '目的地',
              ...autoLayout
            },
            compProps: {
              maxLength: 30
            }
          },
          {
            id: 'no',
            colspan: 12,
            comp: 'Input',
            itemProps: {
              name: 'no',
              label: '运单号',
              ...autoLayout
            },
            compProps: {
              maxLength: 30
            }
          },
          {
            id: 'remark',
            colspan: 24,
            colProps: {
              style: { marginLeft: -6 }
            },
            comp: 'TextArea',
            itemProps: {
              name: 'remark',
              label: '备注',
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              }
            },
            compProps: {
              maxLength: 30
            }
          }
        ]
      }
    ]
    const payModalProps = {
      title: '油卡充值',
      visible: payVisible,
      onCancel: this.payCancel
    }
    const recycleModalProps = {
      title: '油卡回收',
      visible: recycleVisible,
      onCancel: this.payCancel
    }
    const setModalProps = {
      title: '油卡设置',
      visible: setVisible,
      onCancel: this.payCancel
    }
    const recycleFieldLists = [
      {
        id: 'recycle',
        list: [
          {
            id: 'cardNumber',
            colspan: 12,
            itemProps: {
              label: '油卡编号',
              ...autoLayout
            },
            text: '653657453'
          },
          {
            id: 'drivername',
            colspan: 12,
            itemProps: {
              label: '司机姓名',
              ...autoLayout
            },
            text: '653657453'
          },
          {
            id: 'phone',
            colspan: 12,
            itemProps: {
              label: '手机号',
              ...autoLayout
            },
            text: '15678765444'
          },
          {
            id: 'balance',
            colspan: 12,
            itemProps: {
              label: '可回收余额',
              labelCol: {
                span: 12
              },
              wrapperCol: {
                span: 12
              }
            },
            text: '343.23 元'
          },
          ...borderList,
          {
            id: 'driverType',
            comp: 'Select',
            colspan: 12,
            itemProps: {
              name: 'driverType',
              label: '司机类型',
              ...autoLayout
            },
            optionList: [
              {
                value: '1',
                name: '自有'
              },
              {
                value: '2',
                name: '外请'
              }
            ],

            compProps: {
              placeholder: '请选择'
            }
          },
          {
            id: 'recycleNum',
            comp: 'Input',
            colspan: 12,
            itemProps: {
              name: 'recycleNum',
              label: '本次回收',
              required: true,
              rules: [{ required: true, message: '请填写回收金额' }],
              ...autoLayout
            },
            compProps: {
              addonAfter: '元'
            }
          },
          ...borderList,
          {
            id: 'remark',
            colspan: 24,
            colProps: {
              style: { marginLeft: -6 }
            },
            comp: 'TextArea',
            itemProps: {
              name: 'remark',
              label: '备注',
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              }
            },
            compProps: {
              maxLength: 30
            }
          }
        ]
      }
    ]

    const setFieldLists = [
      {
        id: 'setFields',
        list: [
          {
            id: 'cardNumber',
            colspan: 12,
            itemProps: {
              label: '油卡编号',
              ...autoLayout
            },
            text: '653657453'
          },
          {
            id: 'drivername',
            colspan: 12,
            itemProps: {
              label: '司机姓名',
              ...autoLayout
            },
            text: '653657453'
          },
          {
            id: 'phone',
            colspan: 12,
            itemProps: {
              label: '手机号',
              ...autoLayout
            },
            text: '15678765444'
          },
          {
            id: 'identityNum',
            colspan: 12,
            itemProps: {
              label: '身份证',
              ...autoLayout
            },
            text: '510714198502150452 '
          },
          {
            id: 'typeDriver',
            colspan: 12,
            itemProps: {
              label: '司机类型',
              ...autoLayout
            },
            text: '自有司机'
          },
          ...borderList,
          {
            id: 'carNum',
            comp: 'Input',
            colspan: 24,
            itemProps: {
              name: 'carNum',
              label: '绑定车辆',
              required: true,
              rules: [{ required: true, message: '请填写车牌号' }],
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              }
            },
           
          },
          {
            id: 'cardState',
            comp: 'RadioGroup',
            colspan: 24,
            itemProps: {
              initialValue:'1',
              name: 'cardState',
              label: '油卡状态',
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              }
            },
            compProps:{
              value:'1',
              options:[
                { label: '有效', value: '1' },
                { label: '冻结', value: '2' },
              ]
            }
           
          },
        ]
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
          <Button
            type='primary'
            value='large'
            icon={<PlusOutlined />}
            onClick={this.openCard}
          >
            开卡
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={pagination}
        />
        {payVisible && (
          <CustomModal
            modalProps={payModalProps}
            okHandler={this.payOk}
            cancelHandler={this.payCancel}
            fieldLists={payFieldLists}
            custWrapperCol={{ span: 24 }}
          />
        )}
        {recycleVisible && (
          <CustomModal
            modalProps={recycleModalProps}
            okHandler={this.payOk}
            cancelHandler={this.payCancel}
            fieldLists={recycleFieldLists}
            custWrapperCol={{ span: 24 }}
          />
        )}
        {setVisible && (
          <CustomModal
            modalProps={setModalProps}
            okHandler={this.payOk}
            cancelHandler={this.payCancel}
            fieldLists={setFieldLists}
            custWrapperCol={{ span: 24 }}
          />
        )}
      </div>
    )
  }
}

DriverOilCard.propTypes = {}

export default connect(state => state, branchActions)(DriverOilCard)
