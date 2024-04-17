import React, { useEffect, useState } from 'react'

export const Input = () => {

    const [Name, setName] = useState('Mahesh')

    // function handleChange(e) {
    //     setName(e)
    // }

    // useEffect(()=>{

    // },[Name])
  return (
    <>
        <p>{Name}</p>
        {/* <input type='text' onChange={(e)=>handleChange(e.target.value)}></input> */}
        <input type='text' onChange={(e)=>setName(e.target.value)}></input>
    </> 
  )
}
