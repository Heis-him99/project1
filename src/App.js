import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <h1>Hello React <sup>TM</sup></h1>
      <Counter/>
    </div>
  );
}

export default App;
