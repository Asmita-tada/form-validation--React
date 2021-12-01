
import './App.css';
import {useState} from "react";

function App() {
const[inputs,setInputs] = useState()
const[pwd,setPwd] = useState()

const[visible,setvisible] = useState({})



const handleChangeU = (e) => {
  const x = e.target.value;
  setInputs(x);
}

const handleChangeP = (e) => {
  const y = e.target.value;
  setInputs(y);
  var lowercase = /[a-z]/g;
  if(y.match(lowercase))
  {
    document.getElementById("letter").style.color="green";
  }

  var uppercase = /[A-Z]/g;
  if(y.match(uppercase))
  {
        document.getElementById("capital").style.color="green";

  }

  var number = /[0-9]/g;
  if(y.match(number))
  {
        document.getElementById("number").style.color="green";

  }
  if(y.length >= 8)
  {
      document.getElementById("length").style.color="green";

  }


}




const handleSubmit = (event) => {

  var a= document.getElementById("name").value;
  var b= document.getElementById("psw").value;

  if (a === "") 
  {
    alert('Please Enter UserName');
    return;
  }
  if (b === "") 
  {
    alert('Please Enter Password');
    return;
  }
  event.preventDefault();
  console.log(inputs);
}

 return(
      <div className="App">
          <div className="mail">
          <h1>Form Validation</h1>

          <form id="form" onSubmit={handleSubmit} >

            <label >UseName</label>
            <input type="text" id="name" name="name"  onChange={handleChangeU}></input><br/>
            
            <label>Password</label>
            <input type="password" id="psw" name="psw" onChange={handleChangeP}  onClick={() => setvisible(!visible)}/>
            <button  type="submit" value="submit">Submit</button>
          </form>
          {!visible && <div id="message">
            <h3>Password must contain the following:</h3>
            <p id="letter">A <b>lowercase</b> letter</p>
            <p id="capital">A <b>capital (uppercase)</b> letter</p>
            <p id="number">A <b>number</b></p>
            <p id="length">Minimum <b>8 characters</b></p>
        </div>}
     </div>
        </div>
 );
}
export default App;
