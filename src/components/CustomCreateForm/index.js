import React, { Fragment } from 'react'
import { Form, Input, Select, Button, Card, Row, Col, Radio } from 'antd'

const { Option } = Select
const { TextArea } = Input
const RadioGroup = Radio.Group
export default function CustomCreateForm ({
  formProps = {},
  fieldLists,
  sub,
  custLabelCol,
  custWrapperCol,
  resetHandler
}) {
  const [form] = Form.useForm()

  const subHandler = fieldVal => {
    sub && sub(fieldVal)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const onResetHandler = () => {
    form.resetFields()
    resetHandler && resetHandler()
  }

  const compList = {
    Input,
    Select,
    TextArea,
    Fragment,
    RadioGroup
  }
  const cardList = {
    Card,
    Fragment
  }
  const labelCol = custLabelCol || {
    xs: { span: 10 },
    sm: { span: 6 },
    md: { span: 3 },
    lg: { span: 3 },
    xl: { span: 2 }
  }
  const wrapperCol = custWrapperCol || {
    span: 10
  }
  return (
    <div className='createForm'>
      <Form
        onFinish={subHandler}
        onFinishFailed={onFinishFailed}
        form={form}
        {...formProps}
      >
        {fieldLists.map(fieldList => {
          const CardType = cardList[fieldList.type] || Fragment
          return (
            <Fragment key={fieldList.id}>
              <CardType {...fieldList.cardProps}>
                <Row gutter={24}>
                  {fieldList.list.map(
                    ({ comp = 'Fragment', optionList, ...field }, index) => {
                      if (!field.id) {
                        return (
                          <Col
                            key={index}
                            span={field.colspan || 24}
                            {...field}
                          ></Col>
                        )
                      }
                      const Compname = compList[comp]
                      return (
                        <Col
                          span={field.colspan || 24}
                          key={field.id}
                          {...field.colProps}
                        >
                          <Form.Item
                            labelCol={labelCol}
                            wrapperCol={wrapperCol}
                            {...field.itemProps}
                          >
                            {field.text ? (
                              field.text
                            ) : (
                              <Compname {...field.compProps}>
                                {optionList &&
                                  optionList.map(opt => {
                                    return (
                                      <Option value={opt.value} key={opt.value}>
                                        {opt.name}
                                      </Option>
                                    )
                                  })}
                              </Compname>
                            )}
                          </Form.Item>
                        </Col>
                      )
                    }
                  )}
                </Row>
              </CardType>
              <div className='m20' />
            </Fragment>
          )
        })}

        <div className='btn-list flex-center'>
          <Button onClick={onResetHandler}>取消</Button>
          <Button type='primary' htmlType='submit'>
            确认
          </Button>
        </div>
      </Form>
    </div>
  )
}
