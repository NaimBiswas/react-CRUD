import React, { useState } from 'react'
import { createContext } from 'react'

// @ts-ignore
export const UserContext = createContext();


export const UserProvider = (props) => {
   const [users, setUsers] = useState([
      { id: 1, name: "Naim Biswas", positon: "Web Developer", salary: "$25K" },
      { id: 2, name: "Rashidul Islam", positon: "Laravel Developer", salary: "$23K" },
      { id: 3, name: "Alamin Haque", positon: "JavaScript Developer", salary: "$40k" },
   ]);
   return (
      <UserContext.Provider value={[users, setUsers]}>
         {props.children}
      </UserContext.Provider>
   )
}