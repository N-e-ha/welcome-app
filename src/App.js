import './App.css';
import {useState} from 'react';
// import Welcome from './Welcome';
import Welcome from './Components/Welcome';

function App() {
    const [name , setName] = useState("")
    const [submit , setSubmit] = useState(false)
    const [regno , setRegno] = useState("")

    return (
      <div>
       
        <div className='login-page'>
        <div>
            <label>Enter Your Name -</label>
            &nbsp;&nbsp;
            <input
            placeholder ="name"
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
           
            </div> 
            

            <div>
            <label>Enter Your Reg-</label>
            &nbsp;&nbsp;
            <input
            placeholder ="reg"
            value ={regno}
            onChange={(event)=>{setRegno(event.target.value)}}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{setSubmit(!submit)}}>Submit</button>
            </div> 

            {(submit && name && regno) && <Welcome name={name}  regno={regno}></Welcome>}

          
        </div>
      </div>


    );

}

export default App;