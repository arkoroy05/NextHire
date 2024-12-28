import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Form from './pages/Form';
import Projects from './pages/Projects';
import NavBar from './components/Nav';
import Template from './pages/Template';
import Dashboard from './pages/Dashboard';
import UserPage from './pages/UserPage';

const App = () => {
    return (
      <html lang="en">
      <body
        className={`text-lime-500 h-screen font-sans  `}
      >
        <NavBar />
        <main className="absolute top-[3rem] h-[calc(100vh-3rem)] w-full"><Router>
            <Routes>
                <Route path="/" element={<Home />} />
              
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/form" element={<Form />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/templates/:id" element={<Template />} />
            </Routes>
        </Router>
        </main>
      </body>
    </html>
    );
};

export default App;