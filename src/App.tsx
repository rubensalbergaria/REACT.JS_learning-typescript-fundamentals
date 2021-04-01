import React, {useState} from 'react';
import './App.css';
import MyMessage from './components/MyMessage';

let name: string = 'Rubens';
let age: number = 36;
//let beautiful: boolean = true;
//let documents: object = { id: 123, country: 'Brazil' }

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');

  const displayMessage = (message: string) => { //you can use any insted to use string. So you can receive any value from the user
    console.log(message)
  }

  return (
    <div className="App">
      <h1>LEARNING TYPESCRYPT</h1>
      <div className="variables-container">
        <h3 className="name">Name: {name}</h3>
        <h3 className="age">Age: {age}</h3>          
      </div>
      <div className="counter-container">
        <h1>Counter:</h1>
        <button
          className='btns-increase'
          onClick={() => {
            setCounter( counter + 1)
          }}
        >+ 1</button>
        <h1>{counter}</h1>
        <button
          className='btns-decrease'
          onClick={() => {
            setCounter( counter - 1)
          }}
        >- 1</button>
      </div>
      <br />
  
      <div className="input-container">
      <h2>Digite algo: </h2>
        <input
          className="input-text-area"
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <h1>{inputText}</h1>
      </div>
      <div>
        <h4>Display a message into your console: </h4>
        <button
          className='btn-msg-console'
          onClick={() => {
            displayMessage('Deu certo!')
        }}
        >Show Message</button>
      </div>

      <div className="callign-the-component">
        <MyMessage
          message='Never stop learning'
          year={2021}
        />
      </div>
    </div>
  );
}

export default App;
