import React from 'react';

import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Header1(props) {
  return <h1>  {props.name}</h1>;
}
function Information(props) {
  return <h1>Age:  {props.age} <br></br>
  Address: {props.address}<br></br>
  Phone Number: {props.phoneNumber}</h1>;
}
function Education(props){
return <h1> {props.Institute} <br></br>
 Degree: {props.degree} <br></br>
 Start Date: {props.StartDate} <br></br>
 End Date: {props.EndDate} <br></br>
 Description: {props.description}</h1>
}
function Experience(props){
return <h1> {props.company}<br></br>
Start Date: {props.StartDate1} <br></br>
 End Date: {props.EndDate1} <br></br>
</h1>

}
function Skills(props){
  return <h1> {props.hobbies}</h1>
}



function App() {
  return (
    <div class="App">
      <div class="header">

       <table>
       <tr id="">
            <td id="tab">
             <Header1  name="Faheem Riaz" />

            </td>
            <td >  <img  class ="photo" src="https://bmc.edu.pk/wp-content/uploads/2019/03/doctor-red-1.png" />
            </td>
          </tr>
  


       </table>

       
      </div>

      
      <div class="Information">
     
      <h1 class="heading">Information:</h1>
      <Information  age="20" address="house" phoneNumber="034567790"/>
      
      </div>
      <div class="Education">

      <h1 class="heading">Education:</h1>
      <Education Institue="IMCB"degree="FSC" StartDate="10-10-2020"
      EndDate="10-10-2021" description="IMCB"/>
     
     <Education Institue="COMSATS"degree="BSCS" StartDate="10-10-2022"
      EndDate="10-10-2026" description="COMSATS UNIVERSITY"/>

      </div>
      
    <div class="Company">
      <h1 class="heading">Experience:</h1>
      <Experience company="TECH" StartDate1="10-10-2022"
      EndDate1="10-10-2026" />
    </div>
    <div class="Hobbies">
    <h1 class="heading">Hobbies:</h1>
    <Skills hobbies="cricket"/>
    <Skills hobbies="gaming"/>
    <Skills hobbies="writing"/>
    </div>
    
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
