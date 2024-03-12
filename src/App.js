import logo from './logo.svg';
import './App.css';
import Demo from './demo.js'
import Contact from './contact.js' 
import student from './mca.js'

function App() {
  console.log(student);
  return (
    <>
  
    {/* <Demo /> */}
    {
      student.map(function(student){
        return <Contact image={`https://cms.atmiya.edu.in/images/Stud_Photo/${student.AdmissionNo}.JPG`} name={`${student.StudentName}`} description={`${student.Division} - ${student.RollNo}`} />
      })
    }
  </>
  );
}

export default App;
