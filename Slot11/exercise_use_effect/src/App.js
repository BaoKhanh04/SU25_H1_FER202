import React from 'react';
import './App.css';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordForm from './components/EmailPasswordForm';
import ComprehensiveForm from './components/ComprehensiveForm';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1 className="text-center mt-4 mb-5">React Form Validation with useEffect</h1>
        
        <ValidatedInput />
        <hr className="my-5" />
        
        <EmailPasswordForm />
        <hr className="my-5" />
        
        <ComprehensiveForm />
      </div>
    </div>
  );
}

export default App;
