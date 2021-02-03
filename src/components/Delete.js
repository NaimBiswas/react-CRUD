import React from 'react'
import { Fragment } from 'react'
import { UserContext, } from './UserContext/UserContext'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'

const Delete = () => {
   const [users, setUsers] = useContext(UserContext);
   const { id } = useParams();
   console.log(users[id]);

   const user = users.filter(user => users.id != id)
   console.log(user);
   return (
      <Fragment>
         <h2>Hi I am Delete {id} </h2>
      </Fragment>
   )
}

export default Delete
