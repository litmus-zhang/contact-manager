import './App.css';
import { Button, Layout, Tag, Space, Table } from "antd"
import { PlusCircleFilled, DeleteFilled } from '@ant-design/icons';
import AddDrawer from './Drawer';
import { useState } from 'react';
import Sidebar from "./SideBar"
import { useDispatch,useSelector } from 'react-redux';
import { deleteAllContacts, addContact } from './redux/contact/ContactSlice';





const App=()=>
{
  const [showDrawer, setShowDrawer] = useState(false)
  const [errorInfo, setErrorInfo] = useState("")
  const dispatch = useDispatch()

  const {contacts} = useSelector(state => state.contacts)

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
 

  //Functions

  const handleAddFormOnFinish = (data) =>
  {
    setShowDrawer(false)
  }
  const handleAddFormOnFinishFailed = (errorInfo) =>
  {
    setErrorInfo(errorInfo)
  }

  console.log("values", contacts,"error" ,errorInfo)
  return (
    <div className="App">
      <Sidebar>
        <div style={{display:"flex", margin: "2rem auto"}}>
        <Button
          type="primary"
            style={{
              width: "200px", marginRight: "1rem"
            }}
          icon={<PlusCircleFilled />} data-testid="add-contact-button"
          onClick={()=> setShowDrawer(true)}
        >Add New Contact</Button>
        <Button
          type="danger"
          style={{width: "200px",  color: "black"}}
          icon={<DeleteFilled />} data-testid="add-contact-button"
          onClick={()=> dispatch(deleteAllContacts)}
        >Delete All Contacts</Button>
        </div>
    
        <Layout.Content>
        <Table columns={columns} dataSource={contacts} />

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


export default  (App);
