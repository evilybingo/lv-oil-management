import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DatePicker, TimePicker, Form, Row, Col } from 'antd'
import './time.less'
class CustomTimePicker extends Component {
  dateChange = event => {
    this.props.dateChange(event)
  }
  timeChange = event => {
    this.props.timeChange(event)
  }
  render () {
    const { label ,format= 'HH:mm',labelCol={}} = this.props
    const layout = {
      md: { span: 8 },
      sm: { pan: 12 },
      xs: { span: 24 }
    }
    return (
      <div className='customTimePicker'>
        <Row gutter={layout}>
          <Col span={14}>
            <Form.Item labelCol={labelCol} name='date' label={label}>
              <DatePicker
                name='date'
                className='w100'
                onChange={this.dateChange}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item name='time'>
              <TimePicker
                className='w100'
                format={format}
                showNow
                onChange={this.timeChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </div>
    )
  }
}

CustomTimePicker.propTypes = {
  dateChange: PropTypes.func,
  timeChange: PropTypes.func,
  format:PropTypes.string,
  label:PropTypes.string,
  labelCol:PropTypes.any,
}

export default CustomTimePicker
