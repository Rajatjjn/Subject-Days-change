import React,{useState} from "react";
import "./style.css";

const subjects=["hindi","english","math"]
const day=["mon","tue","wed","thu","fri","sat"]

export default function App() {
  const[sub,setsub]=useState("")
  const[dayes,setdayes]=useState("")
 console.log(sub,dayes)
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1>subject</h1>
      {
      subjects.map((ele)=>(
        <>
 <input type="radio" name={subjects} id={ele} value={ele} onChange={(e)=>setsub(e.target.value)}/>
      <label htmlFor={ele}>{ele}</label>
      <br/>
        </>
      )) 
      }
<h1>days</h1>
     {
       day.map((days)=>(
         <>
         <input type="radio" name={day} id={days} value={days} onChange={(e)=>setdayes(e.target.value)} />
      <label htmlFor={days}>{days}</label>
      <br/>
         </>
       ))
     }

     {sub&& dayes&&<h1>sub is {sub} and day is {dayes}</h1>} 

    </div>
  );
}
