import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Contratos from './pages/Contratos.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Reservas from './pages/Reservas.jsx';
import Tickets from './pages/Tickets.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservas" element={<Reservas />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="contratos" element={<Contratos />} />
      </Route>
    </Routes>
  );
}

export default App;
