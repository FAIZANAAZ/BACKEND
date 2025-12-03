// frontend/app/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';
import * as api from '../services/api';

export default function LoginPage() {
  const [response, setResponse] = useState<any>(null);
  const router = useRouter();

  const handleSetResponse = (res: any) => {
    setResponse(res);
    if (res && res.message === 'Login successful') {
      router.push('/home'); // Redirect to home page after successful login
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #444', borderRadius: '8px', backgroundColor: '#2a1a4a' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
      <LoginForm setResponse={handleSetResponse} setIsAuthenticated={() => {}} /> {/* setIsAuthenticated is not used here */}
      {response && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#1a1032', borderRadius: '5px' }}>
          <h3 style={{ marginBottom: '10px' }}>API Response</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', color: '#fff' }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
