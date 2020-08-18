import React from 'react'
import { Button, Form, Row, Col, Input, Select, Cascader } from 'antd'
import CustomTimePicker from '../CustomTimePicker'
const { Option } = Select
export default function CustomSearchForm ({
  searchList,
  onFinish,
  onReset,
  layout = {
    md: { span: 8 },
    sm: { pan: 12 },
    xs: { span: 24 }
  },
  btnList = [
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
    }
  ],
  btnLayout={
    md: { span: 8 },
    sm: { pan: 12 },
    xs: { span: 24 }
  }
}) {
  const [form] = Form.useForm()
  const subHandler = values => {
    onFinish(values)
  }
  const CompList = {
    Input,
    Select,
    Cascader,
    CustomTimePicker
  }
  const onResetHandler = () => {
    form.resetFields()
    onReset()
  }
  
  const rowLayout = {
    md: { span: 8 },
    lg: { pan: 24 },
    xs: { span: 48 }
  }

  return (
    <Form onFinish={subHandler} form={form}>
      <Row gutter={rowLayout}>
        {searchList.map(
          ({ compName, optionList, handlerFn, options, ...l }) => {
            const Comp = CompList[compName]
            return (
              <Col {...layout} key={l.name} style={{ padding: '0 24px' }}>
                {l.custom ? (
                  <Comp {...l} {...handlerFn} />
                ) : (
                  <Form.Item {...l}>
                    <Comp {...handlerFn} options={options}>
                      {optionList &&
                        optionList.map(optionItem => {
                          return (
                            <Option value={optionItem.id} key={optionItem.id}>
                              {optionItem.name}
                            </Option>
                          )
                        })}
                    </Comp>
                  </Form.Item>
                )}
              </Col>
            )
          }
        )}
        <Col {...btnLayout} style={{ padding: '0 24px' }}>
          <div className='btn-list'>
            {btnList.map(({ name, id, ...btnProps }) => {
              return id === 'reset' ? (
                <Button key={id} {...btnProps} onClick={onResetHandler}>
                  {name}
                </Button>
              ) : (
                <Button key={id} {...btnProps}>
                  {name}
                </Button>
              )
            })}
          </div>
        </Col>
      </Row>
    </Form>
  )
}
