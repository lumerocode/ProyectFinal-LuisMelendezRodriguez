import './App.scss';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './components/CartWidget';

function App() {

  return (

    <BrowserRouter>
      <NavBar/>

        <Routes>

          <Route path="/" element />
          <Route path="/cart" element={<h1>Holaaaa Vista cart</h1>}/>
          <Route/>

        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
