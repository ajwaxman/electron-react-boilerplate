import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  const buttonText = " Find Focus";
  return (
    <div>
      <h1 className="timer">25:00</h1>
      <div className="Hello">
          <button type="button">
            <span role="img" aria-label="books">
            ✨
            </span>
             {buttonText}
          </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
