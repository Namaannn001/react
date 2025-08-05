import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { StoryRoomPage } from './pages/StoryRoomPage';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { Navbar } from './components/layout/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  // We'll manage real auth state later
  const isAuthenticated = true; 

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/story/:storyId" element={<StoryRoomPage />} />
        </Routes>
      </main>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;