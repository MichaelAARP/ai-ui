import React, { useState, useEffect } from 'react';

const CORRECT_PASSWORD = 'andrewtest'; // update password as needed

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('authenticated');
    if (stored === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div style={{ 
      height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#185d28', color: 'white', flexDirection: 'column'
    }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <img src="/logo.png" alt="Greenhouse Logo" style={{ height: '40px', marginRight: '0.5rem' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>ATC Greenhouse</span>
      </div>
      <p>Enter Password to Continue</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            backgroundColor: '#ffffff',
            color: '#185d28',
            border: 'none',
            outline: 'none',
            borderRadius: '4px'
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '0.5rem',
            backgroundColor: '#ffffff',
            color: '#185d28',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;