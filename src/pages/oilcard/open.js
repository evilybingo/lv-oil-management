import React, { Component } from 'react'
import { CreateForm } from '../../components'
class OpenCard extends Component {
  submitHandler = val => {
    console.log(val)
  }
  render () {
    const fieldList = [
      {
        id: 'driverName',
        comp: 'Input',
        itemProps: {
          required: true,
          label: '司机姓名',
          rules: [{ required: true, message: '请填写司机姓名' }]
        },
        compProps: {}
      },
      {
        id: 'phone',
        comp: 'Input',
        itemProps: {
          label: '手机号',
          rules: [{ required: true, message: '请填写司机手机号' },{ PARR: true, message: '请填写司机手机号' }]
        },
      
      },
      {
        id: 'identity',
        comp: 'Input',
        itemProps: {
          label: '身份证号'
        }
      },
      {
        id: 'driverType',
        comp: 'Select',
        itemProps: {
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
    return (
      <div className='openCard'>
        <CreateForm fieldList={fieldList} submitHandler={this.submitHandler} />
      </div>
    )
  }
}

export default OpenCard
