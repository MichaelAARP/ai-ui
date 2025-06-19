import { Routes, Route } from 'react-router-dom';
import AarpPage from './pages/AarpPage';
import CarePage from './pages/CarePage';

function App() {
  return (
    <Routes>
      <Route path="/aarp" element={<AarpPage />} />
      <Route path="/care" element={<CarePage />} />
    </Routes>
  );
}

export default App;