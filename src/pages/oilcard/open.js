import React, { Component } from 'react'
import { CustomCreateForm } from '../../components'
class OpenCard extends Component {
  subHandler = val => {
    console.log(val)
  }
  render () {
    const fieldLists = [
      {
        id: 'baseInfo',
        type: 'Card',
        cardProps: {
          title: '基础信息',
          bordered: true
        },
        list: [
          {
            id: 'driverName',
            comp: 'Input',
            itemProps: {
              name: 'driverName',
              required: true,
              label: '司机姓名',
              rules: [{ required: true, message: '请填写司机姓名' }]
            }
          },
          {
            id: 'phone',
            comp: 'Input',
            itemProps: {
              name: 'phone',
              label: '手机号',
              required: true,
              rules: [{ required: true, message: '请填写司机手机号' }]
            }
          },
          {
            id: 'identity',
            comp: 'Input',
            itemProps: {
              name: 'identity',
              label: '身份证号'
            }
          },
          {
            id: 'driverType',
            comp: 'Select',
            itemProps: {
              name: 'driverType',
              label: '司机类型'
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
          }
        ]
      },
      {
        id: 'bindCar',
        type: 'Card',
        cardProps: {
          title: '绑定车辆',
          bordered: true
        },
        list: [
          {
            id: 'carNum',
            comp: 'Input',
            itemProps: {
              name: 'carNum',
              label: '车牌号'
            }
          }
        ]
      },
      {
        id: 'cardPay',

        type: 'Card',
        cardProps: {
          title: '油卡充值',
          bordered: true
        },

        list: [
          {
            id: 'payNum',
            comp: 'Input',
            itemProps: {
              name: 'payNum',
              label: '充值金额'
            }
          },
          {
            id: 'start',
            comp: 'Input',
            itemProps: {
              name: 'start',
              label: '出发点'
            }
          },
          {
            id: 'end',
            comp: 'Input',
            itemProps: {
              name: 'end',
              label: '目的地'
            }
          },
          {
            id: 'wayBill',
            comp: 'Input',
            itemProps: {
              name: 'wayBill',
              label: '运单号'
            }
          },
          {
            id: 'remark',
            comp: 'TextArea',
            itemProps: {
              name: 'remark',
              label: '备注'
            }
          }
        ]
      }
    ]

    return (
      <div className='openCard'>
        <CustomCreateForm fieldLists={fieldLists} sub={this.subHandler} />
      </div>
    )
  }
}
export default OpenCard
