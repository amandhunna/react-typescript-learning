import Button from './Button';
import Title from './ButtonStyle';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Button name="checkbutton" id="hiß∂">Hi</Button>
          <Title style={{background: "blue", fontSize: '30px'}} id="header" isActive={true}>H1</Title>
      </header>
    </div>
  );
}

export default App;
