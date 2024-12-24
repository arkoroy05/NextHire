import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Form';
import Form from './pages/Home';

const App = () => {
    return (
      <>
      <h1>header</h1>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </Router>
        <h1>footer</h1>
      
      </>
    );
};

export default App;