import { useState } from "react"
import Modal from "./Modal"

const ListHeader=({listName}) => {

  const signOut= () => {
    console.log('signout')
  }

  const [showModal,setShowModal] =useState(false)
    return (
      <div className="list-header">
      <h1>{listName}</h1>

      <div className ="button-container">
       <button className="create" onClick={()=>setShowModal(true)}> ADD NEW</button>
       <button className="signout" onClick={signOut}>SIGN OUT</button>
      <div>
       {showModal && <Modal mode ={'create'} setShowModal={setShowModal}/>}
      </div>
      </div>
      </div>
      )}
    
  
  export default ListHeader