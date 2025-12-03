// components/LoginForm.tsx
'use client';
import { useState } from 'react';
import * as api from '../services/api';

interface LoginFormProps {
  setResponse: (response: any) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export default function LoginForm({ setResponse, setIsAuthenticated }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await api.login({ email, password });
    setResponse(res);
    if (res && res.message === 'Login successful') {
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#251a41', color: '#fff' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#251a41', color: '#fff' }}
        />
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#6a11cb', color: 'white', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

