import React, { useState ,useEffect} from 'react';
import  '../index.css';
import axios from 'axios';

function Displaydata() {

    const [data,getdata] = useState([]);

    useEffect(()=>{
        axios.get('https://react-example-acdce-default-rtdb.firebaseio.com/simpleform.json').then(
            (res)=>{
                // console.log(Object.values(res.data))
                
                getdata(Object.values(res.data));
                
                
            }
            )
    },[])

    useEffect(() => {
        console.log("Updated data:", data);
      }, [data]);

     const dd = data.map((datarow)=>{
        return(
            <tr>
                <td>{datarow.email}</td>
                <td>{datarow.fName}</td>
                <td>{datarow.lName}</td>
                
        </tr>
        )
    })
  return (
    <div>
        <h1 className='tt' >hello</h1>
        <tr>
            <th>Firstname</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
        {dd}
    </div>
  )
}

export default Displaydata