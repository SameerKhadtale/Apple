
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import './components/apple.css'
import Store from './components/Store';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/store' element= {<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
