import './App.css';
import Counter from './Components/Counter';
import Greeting from './Components/Greeting';

function App() {
 
  let name : string = "Mahmoud"

  return (
    <div>
      <Counter name={name}/>
      <Greeting name={name}/>
    </div>
  );
}

export default App;
