import {useState} from 'react'


function About(){
	const[village,setVillage]=useState("veerankilock");
	const[country,setCountry]=useState("India");
	const[password,setPassword]=useState("Ammu")
	return(
		<div>
			{/*<h1>{country}</h1>
				<p>{village}</p>*/}
			{password}
			<p><input onChange={(e)=>setVillage(e.target.value)} placeholder="Enter village"/></p>
			<input onChange={(p)=>setPassword(p.target.value)} placeholder="Enter password"/>
			<button onClick={()=>console.log(village,country)}>Submit</button>
		</div>
		)
}


export default About