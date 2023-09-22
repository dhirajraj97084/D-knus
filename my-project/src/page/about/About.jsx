import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import Mycontext from '../../context/data/Mycontext'

function About() {
  const context=useContext(Mycontext);
  const {name,rollnumber}=context;
  return (
    <Layout>
      
      <div className="div h-96 bg-blue-900/90">about
      <h1 >{name}</h1>
      <h2>Roll Number:{rollnumber}</h2></div>
          </Layout>
  )
}

export default About
