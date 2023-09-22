import React from 'react'
import Mycontext from './Mycontext'
function Mystate(props) {
const state={
    name : "Dhiraj kumar tiwari",
    rollnumber : 15
}
  return (
    <Mycontext.Provider value={state}>
      {props.children}
    </Mycontext.Provider>
  )
}

export default Mystate
