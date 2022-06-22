import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Drawer, Form, Button,Input, Checkbox } from "antd"

function AddDrawer({ show, handleOnClose , handleOnFinish, handleOnFinishFailed})
{
    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: ""
    }
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()
    
    useEffect(() =>
    {
       forceUpdate({}) 
    },[])
    return (
        <Drawer
        data-testid="add-contact-drawer"
            title="Add Contact"
            visible={show}
            onClose={handleOnClose}
            maskClosable={show}
            width={412}
            >
            <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
                }}
      layout="vertical"
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        initialValues
      }}
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your first Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Input type={"tel"}/>
      </Form.Item>


     

      <Form.Item  
            style={{ width: "100%", display: "flex" }}
            shouldUpdate>
       
                      <Button
                        style={{ width: "48%", marginRight: "8px" }}
                        type="primary"
                        htmlType="submit"
                        
                    >
                         Add
                    </Button>
       
                      <Button
                        style={{ width: "48%"}}
                        type="secondary"
                        htmlType="button"
                        onClick={()=>form.resetFields()}
                    >
                         Reset
                    </Button>
                         
                    

      </Form.Item>
    </Form>
    </Drawer>
  )
}

AddDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
    handleOnFinish: PropTypes.func.isRequired,
    handleOnFinishFailed:PropTypes.func.isRequired,
}

export default AddDrawer
