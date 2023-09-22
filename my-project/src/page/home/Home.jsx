import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import Mycontext from '../../context/data/Mycontext';
function Home() {
  const context=useContext(Mycontext);
  const {name,rollnumber}=context;
  return (
    <Layout>
      <div className="div h-96 bg-blue-900/90 flex items-center justify-center ">
       <div className="div space-y-3">
       <h1 className="text-center text-6xl font-bold text-yellow-400" >{name}</h1>
        <h2 className="text-3xl ">Here are some cheatsheets and Mind Map contributed by Devknus.{rollnumber}</h2>
       </div>
      </div>
    </Layout>
  )
}

export default Home
