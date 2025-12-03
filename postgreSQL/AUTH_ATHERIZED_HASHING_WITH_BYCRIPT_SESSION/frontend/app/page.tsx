// Import necessary hooks from React and the API functions.
"use client";
import { useState, useEffect } from 'react';
import * as api from './services/api';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import HomeData from './components/HomeData';

// Define the main component for the page.
export default function Home() {
  // State to store and display the API response.
  const [response, setResponse] = useState<any>(null);
  // State to track whether the user is authenticated.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated when the component mounts.
  useEffect(() => {
    const checkAuth = async () => {
      const res = await api.getHomeData();
      if (res && res.user) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);

  // Handler for the "Logout" button click.
  const handleLogout = async () => {
    const res = await api.logout();
    setResponse(res);
    setIsAuthenticated(false);
  };

  // The JSX for the component's UI.
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>API Tester</h1>

      {!isAuthenticated ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <SignupForm setResponse={setResponse} />
          <LoginForm setResponse={setResponse} setIsAuthenticated={setIsAuthenticated} />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Welcome! You are logged in.</h2>
          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <HomeData setResponse={setResponse} />
            <button onClick={handleLogout} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#fc466b', color: 'white', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        </div>
      )}

      {/* API Response Display */}
      {response && (
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#000', borderRadius: '5px' }}>
          <h3 style={{ marginBottom: '10px' }}>API Response</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', color: '#fff' }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}