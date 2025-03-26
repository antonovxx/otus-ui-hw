import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facts from './pages/facts/facts';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Facts />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;