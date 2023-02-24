import {Route, Routes} from 'react-router-dom';
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard';
import {NotFound} from './pages/NotFound';
import {Profile} from './pages/Profile';
import {Layout} from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
