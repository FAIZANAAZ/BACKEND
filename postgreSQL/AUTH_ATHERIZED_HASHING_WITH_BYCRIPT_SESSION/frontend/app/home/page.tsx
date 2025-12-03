// frontend/app/home/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HomeData from '../components/HomeData';
import * as api from '../services/api';

export default function HomePage() {
  const [response, setResponse] = useState<any>(null);
  const router = useRouter();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const res = await api.getHomeData();
      if (!res || !res.user) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    const res = await api.logout();
    setResponse(res);
    if (res && res.message === 'Logout successful') {
      router.push('/login'); // Redirect to login page after successful logout
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', border: '1px solid #444', borderRadius: '8px', backgroundColor: '#2a1a4a' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Home Page</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <HomeData setResponse={setResponse} />
        <button onClick={handleLogout} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#fc466b', color: 'white', cursor: 'pointer' }}>
          Logout
        </button>
      </div>

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
