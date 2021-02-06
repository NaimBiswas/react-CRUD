import React, { useState } from 'react'
import { Fragment } from 'react'
import { UserContext, } from './UserContext/UserContext'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Delete = () => {
   const [users, setUsers] = useContext(UserContext);
   const [show, setShow] = useState(true);
   const { id } = useParams();

   const deleteUser = (id) => {

      const user = users.filter((user) => user.id != id);
      setUsers(user);

   }


   // const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);


   return (
      <Fragment>
         <h2>Hi I am Delete {id} </h2>

         {/* Modal Here  */}
         {/* <Button variant="primary" >
            Launch demo modal
      </Button> */}

         <Modal show={show} >
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Hei Are You Sure! Delete Him, If not just click on No we will save him</Modal.Body>
            <Modal.Footer>
               <Link to='/'>
                  <Button variant="secondary" >
                     No! I Don't
                   </Button>
               </Link>

               <Link to='/'>
                  <Button onClick={() => deleteUser(id)} variant="danger" >
                     Yes! Delete Him
                  </Button>
               </Link>
            </Modal.Footer>
         </Modal>

      </Fragment >
   )
}

export default Delete
