import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import Count from './components/Count';
import Prost from './components/Prost';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  // function say(props) {
    // const thing = props.thing;
    // const age = props.age;
    // if ((thing === "drink")&&(age === 28)) {
    //   return <Prost />;
    // }
    // else return <GuestGreeting />;
  // }

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name={"Jaanus"} age={28}/>
      {/* <Greeting name="Jaanus" age="28"/> */}
      <Count name={"Jaanus"} thing={"drink"}/>
      {/* thing={"snack"} */}
    </div>
  );
}

export default App;
/* <Greeting name="Raimo" age="34"/> */