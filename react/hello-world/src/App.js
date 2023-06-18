import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/functionClick';

function App() {
  return (
    <div className="App">

    <h1>Hello Buddy !</h1>

    <FunctionClick />
      
      
      {/* <Counter/>
      
      <Welcome name='Tamilvanan' heroName='Philomath' />
     <Greet name='Tony Stark' heroName='Iron Man'>
        <p>This is children props</p>
      </Greet>

      <Greet name='Bruce Wayne' heroName='Bat Man' >
        <button>
          Action
        </button>
      </Greet> */}

      {/* <Welcome name='Tony Stark' heroName='Iron Man'/>
      <Welcome name='Tony Stark' heroName='Iron Man'/> */}
       
    
    </div>
    ); 

 
}

export default App;
