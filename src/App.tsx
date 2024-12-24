import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import NavBar from './components/Nav';

const App = () => {
    return (
      <html lang="en">
      <body
        className={`text-amber-200 h-screen font-sans  `}
      >
        <NavBar/>
        <main className="absolute top-[3rem] h-[calc(100vh-3rem)] w-full"><Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </Router>
        </main>
      </body>
    </html>
    );
};

export default App;