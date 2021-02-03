import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
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
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Username</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>1</td>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                  </tr>
                  <tr>
                     <td>2</td>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                  </tr>
                  <tr>
                     <td>3</td>
                     <td
                        // @ts-ignore
                        colSpan="2">Larry the Bird</td>
                     <td>@twitter</td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </div>
   )
}

export default Home
