import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Starships from './components/starships/Starships';
import People from './components/people/People';
import Planets from './components/planets/Planets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="people" element={<People />} />
        <Route path="planets" element={<Planets />} />
        <Route path="starships" element={<Starships />} />
      </Routes>
    </div>
  );
}

export default App;
