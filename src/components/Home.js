import React, { useContext, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext/UserContext';

const Home = () => {
   const [users, setUsers] = useContext(UserContext);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <div className='container'>
         <Button variant='outline-success mt-5 mb-2'>Add New User</Button>
         <div className="table">
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Position </th>
                     <th>Salary</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map(user => [
                        <tr>
                           <td>{user.id} </td>
                           <td>{user.name}</td>
                           <td> {user.position} </td>
                           <td> {user.salary} </td>
                           <td>

                              <Button onClick={handleShow} variant='outline-danger ml-1 btn-md'>Remove</Button>

                              <Button variant='outline-info ml-1 btn-md'>Show</Button>
                              <Button variant='outline-warning  ml-1 btn-md'>Edit</Button>
                           </td>
                        </tr>
                     ])
                  }
               </tbody>
            </Table>
         </div>
         {/* Modal Here  */}
         {/* <Button variant="primary" >
            Launch demo modal
      </Button> */}

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Hei Are You Sure! Delete Him, If not just click on No we will save him</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  No! I Don't
          </Button>
               <Button variant="danger" onClick={handleClose}>
                  Yes! Delete Him
          </Button>
            </Modal.Footer>
         </Modal>
      </div >
   )
}

export default Home
