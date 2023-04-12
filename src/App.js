import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="Missions" element={<Missions />} />
        <Route exact path="Myprofile" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
