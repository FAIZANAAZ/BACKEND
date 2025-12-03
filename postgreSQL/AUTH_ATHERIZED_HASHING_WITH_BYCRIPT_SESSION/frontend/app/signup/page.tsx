// frontend/app/signup/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignupForm from '../components/SignupForm';
import * as api from '../services/api';

export default function SignupPage() {
  const [response, setResponse] = useState<any>(null);
  const router = useRouter();

  const handleSetResponse = (res: any) => {
    setResponse(res);
    if (res && res.success) { // Assuming your API returns { success: true } on successful signup
      router.push('/login'); // Redirect to login page after successful signup
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #444', borderRadius: '8px', backgroundColor: '#2a1a4a' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Signup</h1>
      <SignupForm setResponse={handleSetResponse} />
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
