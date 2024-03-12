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
  </>
  );
}

export default App;
