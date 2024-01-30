import './App.css';
//import Counter from './component/counter';
//import Timer from './component/timer';
import Prop from './component/props';

//<Timer/>
//<Counter/>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Prop name="Petteri" age={42} />
      </header>
    </div>
  );
}

export default App;
