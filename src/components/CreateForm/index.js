import React, { Fragment } from 'react'
import { Form, Input, Select, Button } from 'antd'

const { Option } = Select
function CreateForm ({ formProps = {}, fieldList, submitHandler }) {
  const [form] = Form.useForm()

  const onFinish = fieldVal => {
    submitHandler && submitHandler(fieldVal)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const compList = {
    Input,
    Select
  }
  const labelCol = {
    xs: { span: 8 },
    sm: { span: 6 },
    md: { span: 3 },
    lg: { span: 3 },
    xl: { span: 2 }
  }
  const wrapperCol = {
    span: 10
  }
  //、、colon
  return (
    <div className='createForm'>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} {...formProps}>
        {fieldList.map(
          ({ comp, optionList, itemProps = {}, compProps = {}, ...field }) => {
            const Compname = compList[comp] || Fragment
            return (
              <Form.Item
                key={field.id}
                colon={false}
                labelCol={labelCol}
                {...itemProps}
                wrapperCol={wrapperCol}
              >
                <Compname {...compProps}>
                  {optionList &&
                    optionList.map(opt => {
                      return (
                        <Option value={opt.value} key={opt.value}>
                          {opt.name}
                        </Option>
                      )
                    })}
                </Compname>
              </Form.Item>
            )
          }
        )}
        <Button htype="primary" htmlType="submit">确认</Button>
      </Form>
    </div>
  )
}
export default CreateForm
