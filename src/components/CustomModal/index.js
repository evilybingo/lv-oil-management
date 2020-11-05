import React from 'react'
import { Modal } from 'antd'
import CustomCreateForm from '../CustomCreateForm'
function CustomModal ({ okHandler, cancelHandler, modalProps = {}, ...rest }) {
  return (
    <>
      <Modal width={600} {...modalProps} footer={null}>
        <CustomCreateForm
          {...rest}
          sub={okHandler}
          resetHandler={cancelHandler}
        />
      </Modal>
    </>
  )
}
export default CustomModal
