import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import API from '../api';
import StatusIcon from '../components/StatusIcon';
import LeftSidebar from '../components/LeftSideBar';

export default function WhoIsComingPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [classmates, setClassmates] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await API.get(`/friends/attendance?userId=${user?.id}`);
        if (res.data && Array.isArray(res.data.friends)) {
          setClassmates(res.data.friends);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn('Attendance API not available, using mock data');
      }

      // Mock fallback list
      const mock = [
        { id: '1', name: 'Alice Johnson', status: 'coming' },
        { id: '2', name: 'Bilal Khan', status: 'not_coming' },
        { id: '3', name: 'Clara Smith', status: 'no_response' },
        { id: '4', name: 'David Park', status: 'coming' },
        { id: '5', name: 'Ehsan Ahmed', status: 'no_response' },
      ];

      setClassmates(mock);
      setLoading(false);
    };

    fetch();
  }, [user?.id]);

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <LeftSidebar />

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 700, padding: 24 }}>
          <h2 style={{ marginBottom: 8 }}>Who is Coming Today</h2>
          <p style={{ marginTop: 0, color: '#666', marginBottom: 16 }}>See which of your classmates are coming to university today.</p>

          <div style={{ background: '#fff', border: '1px solid #e6e6e6', borderRadius: 12, padding: 18 }}>
            {loading && <div style={{ color: '#666' }}>Loading…</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}

            {!loading && classmates.length === 0 && (
              <div style={{ color: '#666' }}>No classmates found.</div>
            )}

            {!loading && classmates.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {classmates.map((c) => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: 8, border: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '600' }}>{c.name?.charAt(0)}</div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: '#666' }}>{c.status === 'coming' ? 'Coming' : c.status === 'not_coming' ? 'Not coming' : 'No response'}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <StatusIcon status={c.status === 'no_response' ? 'no_response' : c.status} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
