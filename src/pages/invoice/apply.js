import React from 'react'
import { Card, Row, Col, Form, Button, Select, Input } from 'antd'
function ApplyInvoice () {
  const { Option } = Select
  const [form] = Form.useForm()
  const subHandler = () => {}
  return (
    <div className='applyInvoice'>
      <Row gutter={24}>
        <Col span={10}>
          <Card title='油品发票申请'>
            <Form onFinish={subHandler} form={form}>
              <Form.Item label='油品供应商' name='supplier'>
                <Select placeholder='请选择油品供应商'>
                  <Option value='老吕加油'>老吕加油</Option>
                </Select>
              </Form.Item>
              <Form.Item label='可开票余额' name='invoiceBalance'>
                4345.23 元
              </Form.Item>
              <Form.Item label='申请开票金额' name='applySum'>
                <Input />
              </Form.Item>
              <Button type='primary' htmlType='submit'>
                提交申请
              </Button>
            </Form>
          </Card>
        </Col>
        <Col span={1}> </Col>
        <Col span={10}>
          <Card title='发票类型' className='mb20' extra={<span className="primary-color">修改</span>}></Card>
          <Card title='开票信息' className='mb20' extra={<span className="primary-color">修改</span>}></Card>
          <Card title='寄送地址' className='mb20' extra={<span className="primary-color">修改</span>}></Card>
        </Col>
      </Row>
    </div>
  )
}
export default ApplyInvoice
