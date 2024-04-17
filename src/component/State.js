import React, { useState } from 'react'

export const State = () => {
    const [Name, setName] = useState('Mahesh')
    const [Islogin, setIslogin] = useState(false)

    function changevalue(){
        setName('MHS')
        setIslogin(true)
    }

  return (
    <>
        <h1>{Name}</h1>
        <button onClick={changevalue}>Change Value</button>
        {Islogin ? <p>Welcome MHS</p> : <p>Please Login</p>}
    </>
  )
}
