import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import QuizPage from './components/QuizPage';
import ReviewPage from './components/ReviewPage';
import Navigation from './components/Navigation';
import './App.css';

const About = () => <div className="container mt-4"><h2>About</h2><p>This is the About page.</p></div>;
const News = () => <div className="container mt-4"><h2>News</h2><p>This is the News page.</p></div>;
const Contact = () => <div className="container mt-4"><h2>Contact</h2><p>This is the Contact page.</p></div>;

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<QuizPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/quiz/review" element={<ReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
