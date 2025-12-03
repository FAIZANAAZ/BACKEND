// components/SignupForm.tsx
'use client';
import { useState } from 'react';
import * as api from '../services/api';

interface SignupFormProps {
  setResponse: (response: any) => void;
}


export default function SignupForm({ setResponse }: SignupFormProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await api.signup({ username, email, password });
    setResponse(res);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Signup</h2>
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#251a41', color: '#fff' }}
        />
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
          Signup
        </button>
      </form>
    </div>
  );
}
