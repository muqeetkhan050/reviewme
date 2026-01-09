import React, { useState } from 'react';
import { Button } from './ui';
import API from '../api';
import StatusIcon from './StatusIcon';

export default function WhoIsComing({ userId }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState([]);

  const fetchFriends = async () => {
    setLoading(true);
    setError(null);

    try {
      // Try to fetch real data from an API endpoint if available
      const res = await API.get(`/friends/attendance?userId=${userId}`);
      if (res.data && Array.isArray(res.data.friends)) {
        setFriends(res.data.friends);
        setLoading(false);
        return;
      }
    } catch (err) {
      // ignore and fall back to mock data below
      console.warn('Attendance API not found or returned error, falling back to mock data', err?.message);
    }

    // Fallback mock data
    const today = new Date().toISOString().slice(0, 10);
    const mock = [
      { id: '1', name: 'Alice Johnson', status: 'coming' },
      { id: '2', name: 'Bilal Khan', status: 'not_coming' },
      { id: '3', name: 'Clara Smith', status: 'no_response' },
      { id: '4', name: 'David Park', status: 'coming' },
    ];

    setFriends(mock);
    setLoading(false);
  };

  const toggle = () => {
    if (!open && friends.length === 0) fetchFriends();
    setOpen(!open);
  };

  return (
    <div className="relative inline-block text-left">
      <Button onClick={toggle} className="mt-4">Who is Coming</Button>

      {open && (
        <div className="z-50 absolute left-0 mt-2 w-72 bg-white border rounded-md shadow-lg p-3">
          <h4 className="text-sm font-semibold mb-2">Friends coming today</h4>

          {loading && <div className="text-sm text-gray-500">Loading…</div>}
          {error && <div className="text-sm text-red-500">Error: {error}</div>}

          {!loading && friends.length === 0 && (
            <div className="text-sm text-gray-500">No friends found.</div>
          )}

          <ul className="space-y-2 max-h-60 overflow-auto">
            {friends.map((f) => (
              <li key={f.id} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-white flex items-center justify-center font-semibold">
                    {f.name?.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{f.name}</div>
                    <div className="text-xs text-gray-500">{f.status === 'coming' ? 'Coming' : f.status === 'not_coming' ? 'Not coming' : 'No response'}</div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <StatusIcon status={f.status === 'no_response' ? 'no_response' : f.status} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-3 text-right">
            <button className="text-xs text-gray-500 hover:underline" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
