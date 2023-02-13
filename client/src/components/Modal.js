import { useState } from "react"

const Modal=() => {
const mode = 'create'
const editMode = mode === "edit" ? true : false 
const[data,setData]= useState({
  user_email:"",
  title:"",
  progress:"",
  date: editMode ? "" : new Date()
})
 
 const handleChange =() => {
  console.log('changing!')
 } 

    return (
      <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div> 

      <form className="form"> 
        <input
          required
          maxLength={30}
          placeholder =" Your Task goes here"
          name="title"
          value={""}
          onChange={handleChange}
        />
        <br/>
        <label for="rage">Drag to select your current progress</label>
        <input
          required
          type="range"
          id="rage"
          min="0"
          max="100"
          name="progress"
          value={""}
          onChange={handleChange}
        />
        <input className={mode} type = "submit"/>
      </form>    
      </div>
      
      </div>
    )
  }
  
  export default Modal