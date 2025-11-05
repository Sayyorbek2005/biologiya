import './App.css';
import { Routes, Route } from "react-router-dom";

// ? Pages
import Dashboard from './pages/dashboard/Dashboard';
import FirstCard from './pages/firstCard/FirstCard';
import Bargda from './pages/bargda/Bargda';
import Katta from './pages/katta/Katta';
import Labaratoria from './pages/labaratoria/Labaratoria';
import Osimlik from './pages/osimlik/Osimlik';
import Osimliklarda from './pages/osimliklarda/Osimliklarda';
import Tufelka from './pages/tufelka/Tufelka';
import Yomgir from './pages/yomgir/Yomgir';
import Zambrug from './pages/zambrug/Zambrug';

function App() {
  return (
    <div className="App">
      {/* ? Routes */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/FirstCard" element={<FirstCard />} />
        <Route path="/Bargda" element={<Bargda />} />
        <Route path="/Katta" element={<Katta />} />
        <Route path="/Labaratoria" element={<Labaratoria />} />
        <Route path="/Osimlik" element={<Osimlik />} />
        <Route path="/Osimliklarda" element={<Osimliklarda />} />
        <Route path="/Tufelka" element={<Tufelka />} />
        <Route path="/Yomgir" element={<Yomgir />} />
        <Route path="/Zambrug" element={<Zambrug />} />
      </Routes>
      
    </div>
  );
}

export default App;
