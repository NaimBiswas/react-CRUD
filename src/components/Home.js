import React, { useContext, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext/UserContext';

const Home = () => {
   const [users, setUsers] = useContext(UserContext);


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

                              <Button variant='outline-danger ml-1 btn-md'><Link className='nav-link ' to={'/delete/' + user.id}>Remove</Link></Button>

                              <Button variant='outline-info ml-1 btn-md'>Show</Button>
                              <Button variant='outline-warning  ml-1 btn-md'>Edit</Button>
                           </td>
                        </tr>
                     ])
                  }
               </tbody>
            </Table>
         </div>
      </div >
   )
}

export default Home
