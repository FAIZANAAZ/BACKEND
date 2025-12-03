// components/HomeData.tsx
'use client';
import * as api from '../services/api';

interface HomeDataProps {
  setResponse: (response: any) => void;
}

export default function HomeData({ setResponse }: HomeDataProps) {
  const handleHome = async () => {
    const res = await api.getHomeData();
    setResponse(res);
  };

  return (
    <button onClick={handleHome} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#2575fc', color: 'white', cursor: 'pointer' }}>
      Get Home Data
    </button>
  );
}
