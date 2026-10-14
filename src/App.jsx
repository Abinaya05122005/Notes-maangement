import {useState} from 'react';
function notesapp(){
  const[notesid,setnotesid]=useState([]);
  const[notesname,setnotesname]=useState('');
  const[notescontent,setnotescontent]=useState('');
  const[editid,seteditid]=useState(null);

  const createnotes=()=>{
    if(notesid==''||notesname==''||notescontent==''){
      alert('Enter all details');
      return;
    }
    if(notesapp.some((notes)=>{
      if(notes.id==id){
        alert('ID already exits');
        return;
      }
     setnotesid('');
     setnotesname('');
     seteditid(null);


    }));

  }
  const editnotes = () =>{
    if(editid==null){
      setnotesid(notes.id);
      setnotesname(notes.name);
      setnotescontent(notes.content);
    }
  }

  const deleteid=(notes)=>{
    if(notesid != deleteid){
      setnotesid('');
      setnotesname('');
      setnotescontent('');
      seteditid(null);
    }
    if(editid==deleteid){
    
      setnotescontent([...notes,{notesid,notesname,notescontent}]);
      }}
    
  
return(
<div>
  <h1>Notes Management</h1>
  <label>Notes ID</label>
  <input >
  type="number",
  placeholder="Enter id",
  value={id},
  onChange=(e)=
  {
    setnotes(e.target.value)
}
  </input>
  <br></br>
  <label>Notes name</label>
  <input >
  type="text",
  placeholder="Enter name",
  value={name},
  onChange=(e)={
    setnotes(e.target.value)
  }
   </input>
</div>

)
}
export default notesapp;