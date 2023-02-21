import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function Form() {

    const [details, setDetails] = useState({
        fName: '',
        lName: '',
        email: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

       const{fName,lName,email}=details;

       axios.post("https://react-example-acdce-default-rtdb.firebaseio.com/simpleform.json",JSON.stringify({
        fName,
        lName,
        email,
       
       }),
       {
           headers:{
               'Content-Type':'application/json'
           },
           
        }).then(console.log('added successfully'))

    }

  return (
    <div className='form' >
        <input type='text' placeholder='Enter your first name' onChange={(e)=>
            setDetails({...details,fName:e.target.value})} />
        <input type='text' placeholder='Enter your last name' onChange={(e)=>
            setDetails({...details,lName:e.target.value})}  />
        <input type='email' placeholder='Enter your Email address' onChange={(e)=>
            setDetails({...details,email:e.target.value})} />
        <button onClick={PostData}>Submit</button>
    </div>
  )
}

export default Form