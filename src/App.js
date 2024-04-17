import logo from './logo.svg';
import './App.css';
import { State } from './component/State';
import { Input } from './component/Input';
import { Fetchdata } from './component/Fetchdata';

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Input />
      <hr/>
      <Fetchdata />
    </div>
  );
}

export default App;
