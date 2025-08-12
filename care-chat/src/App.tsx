import { Routes, Route } from 'react-router-dom';
import AarpPage from './pages/AarpPage';
import CarePage from './pages/CarePage';
import PasswordGate from './components/PasswordGate';

function App() {
  return (
    <PasswordGate>
      <Routes>
        <Route path="/aarp" element={<AarpPage />} />
        <Route path="/care" element={<CarePage />} />
      </Routes>
    </PasswordGate>
  );
}

export default App;