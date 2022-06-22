import logo from './logo.svg';
import './App.css';
import { Button, Layout, Tag, Space, Table } from "antd"
import { PlusCircleFilled } from '@ant-design/icons';
import AddDrawer from './Drawer';
import { useState } from 'react';
import Sidebar from "./SideBar"



function App()
{
  const [showDrawer, setShowDrawer] = useState(false)
  const [values, setValues] = useState([])
  const [errorInfo, setErrorInfo] = useState("")

  //Table Data
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
  ];
  const data = [
  ];

  //Functions

  const handleAddFormOnFinish = (data) =>
  {
    setValues([...values, {
      key: values.length + 1,
      ...data
    }])
    setShowDrawer(false)
  }
  const handleAddFormOnFinishFailed = (errorInfo) =>
  {
    setErrorInfo(errorInfo)
  }

  console.log("values", values,"error" ,errorInfo)
  return (
    <div className="App">
      <Sidebar>
      <Button
          type="primary"
          style={{width: "200px", margin: "2rem auto"}}
          icon={<PlusCircleFilled />} data-testid="add-contact-button"
          onClick={()=>setShowDrawer(true)}
        >Add New Contact</Button>
        <Layout.Content>
        <Table columns={columns} dataSource={values} />

        </Layout.Content>
      
        <AddDrawer
         
          show={showDrawer}
          handleOnClose={() => setShowDrawer(!showDrawer)}
          handleOnFinish={handleAddFormOnFinish}
          handleOnFinishFailed={handleAddFormOnFinishFailed}
          />

      </Sidebar>
    </div>
  );
}

export default App;
