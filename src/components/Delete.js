import React from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './UserContext/UserContext'

const Delete = () => {
   const { users, setUsers } = useContext(UserContext)
   const { id } = useParams()
   return (
      <Fragment>
         <h2>Hi I am Delete {id} </h2>
      </Fragment>
   )
}

export default Delete
