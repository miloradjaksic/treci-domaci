import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Igra from './pages/Igra';

function App() {
  const [pokusaji, setPokusaji] = useState([]);
  const dodajPokusaj = (pokusaj) => {
    setPokusaji(prev => {
      return [...prev, pokusaj];
    })
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Igra pokusaji={pokusaji.slice(-12).reverse()} dodajPokusaj={dodajPokusaj} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
