
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import './components/apple.css'
import Store from './components/Store';
import Iphone15pro from './components/Iphone15pro';
import Carousal from './components/Carousal';
import Signin from './components/Signin';
import CreateAppleId from './components/CreateAppleId';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route exact path='/store' element= {<Store/>}/>
        <Route exact path='/Iphone15pro' element= {<Iphone15pro/>}/>
        <Route exact path='/carousal' element={<Carousal/>}/>
        <Route exact path='/signin' element={<Signin/>}/>
        <Route exact path='/create-id' element={<CreateAppleId/>}/>
      </Routes>
    </div>
  );
}

export default App;
