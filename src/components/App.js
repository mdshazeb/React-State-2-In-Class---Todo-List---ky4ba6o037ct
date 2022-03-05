import React from "react";
import "./../styles/App.css";
import {useState} from 'react'
function App() 
{ const [list,setlist]=useState([])
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
		    {ele.text=editText
			}

		   return ele
	  })
    setlist(list2)
	setEditText("")
	setTodoEditing(null)
  }
	return (
	<div id="main">
		<form onSubmit={function(event){
			event.preventDefault()

			const newtodo={
				id:new Date().getTime(),
				text:value,
				completed:false
			}
			setlist([...list,newtodo])

			//let list2=[...list,value]
			//setlist(list2)
           setvalue("")
		}}>
		

	<textarea id="task"  value ={value} onChange={function(event){
		setvalue(event.target.value)
	}}></textarea>
	<button id="btn" type="submit">Add Task</button>
	</form>
    {list.map((ele)=><div key={ele.id}>
		{todoediting===ele.id ?<textarea className="editTask" value={editText} onChange={function(e){
			setEditText(e.target.value) 
		}}></textarea>:<h1>{ele.text}</h1>}
		
		{todoediting===ele.id && {editText}!=null?<button className="saveTask" onClick={()=>Edit(ele.id)}>Save</button>:<button className="edit"onClick={()=>setTodoEditing(ele.id)}>Edit</button> }
		<button className="delete"onClick={()=>Delete(ele.id)}>Delete</button>
		
		
		
		</div>)}

		
		
		
	

	
	
	</div>
	
	);
}


export default App;
