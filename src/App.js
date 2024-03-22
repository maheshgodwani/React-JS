import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './demo.js'
import Contact from './contact.js' 
const mca = require('./mca.json')


function App() {
  return (
    <>
  
    {/* <Demo /> */}
    {
      mca.map(function(student){
        return <Contact image={`https://cms.atmiya.edu.in/images/Stud_Photo/${student.AdmissionNo}.JPG`} name={`${student.StudentName}`} description={`${student.Division} - ${student.RollNo}`} />
      })
    }

    let [count, setCount] = useState(0);
  const numbers = [1, 2, , 6, 8, 34, 66];
  //console.log(numbers);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const submit = () => setCount(0);
  const reset= () => setCount(0);

  for (let i = 0; i <= numbers.length; i++) {
    console.log(i);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Increment}>+</button>{' '}
      <button onClick={Decrement}>-</button>{' '}
      <button onClick={reset}>reset</button>
      <button onClick={submit}>submit</button>
    </div>
  );
  </>
  );
}

export default App;
