import React from "react";
import "./../styles/App.css";
import {useState,useEffect} from 'react'
import { FaEdit,FaTrashAlt } from 'react-icons/fa'
function App() 
{  function getItems()
	{
		let items=localStorage.getItem('lists')
          console.log(items)
		if(items)
		 return JSON.parse(localStorage.getItem('lists'))

		 else
		 return []
	}
	
  const [list,setlist]=useState(getItems())
  const [value,setvalue]=useState("")
  const [editText,setEditText]=useState("")
  const [todoediting,setTodoEditing]=useState(null)
 
  function Delete(id){
	const list2 =[...list].filter((ele)=>ele.id !=id) 
	
	setlist(list2)
  }
  function Edit(id)
  { 
	 const list2= [...list].map((ele)=>{
		  if(ele.id===id)
		    {   if(editText=="")
			    alert("plzz enter valid task")
				else
				ele.text=editText
			}

		   return ele
	  })
    setlist(list2)
	setEditText("")
	setTodoEditing(null)
  }

  useEffect(()=>{
	  localStorage.setItem('lists',JSON.stringify(list))  
	 },
	  [list])
  
	return (
	
	<div id="main">
		<form onSubmit={function(event){
			
			event.preventDefault()
			
              
			   

				
			
			const newtodo={
			
				id:new Date().getTime(),
				text:value,
				//completed:false
			}
			
			setlist([...list,newtodo])

			//let list2=[...list,value]
			//setlist(list2)
           setvalue("")
		   setEditText(value)
		   
		}}>
		
     <h1 className="heading">Todo List</h1>
	 <div className="data">
	<textarea id="task"  value ={value} onChange={function(event){
		setvalue(event.target.value)
	}}></textarea>
	
	<button id="btn" type="submit">Add Task</button>
	</div>
	</form>
    { 
	list.map((ele)=><div className="container">
		{ ele.text!=""?(	<div key={ele.id} className="list">{
		todoediting===ele.id ?<textarea className="editTask" value={editText} onChange={function(e){
			setEditText(e.target.value) 
		}}></textarea>:<ul ><li>{ele.text}</li></ul>}</div>):null}
		
		{ele.text!="" ?(todoediting===ele.id ?(editText!=""?<button className="saveTask" onClick={()=>Edit(ele.id)}>Save</button>:null):<button className="edit"onClick={()=>setTodoEditing(ele.id)}><FaEdit /></button>):null }
		{ele.text!=""?<button className="delete"onClick={()=>Delete(ele.id)}><FaTrashAlt /></button>:null}
		
		
		
	

		
		
		</div>)}

		
		
		
	
    
	
	
	</div>
	
	);
}


export default App;
