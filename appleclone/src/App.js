
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import './components/apple.css'
import Store from './components/Store';
import Iphone15pro from './components/Iphone15pro';
import Carousal from './components/Carousal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/store' element= {<Store/>}/>
        <Route path='/Iphone15pro' element= {<Iphone15pro/>}/>
        <Route path='/carousal' element={<Carousal/>}/>
      </Routes>
    </div>
  );
}

export default App;
