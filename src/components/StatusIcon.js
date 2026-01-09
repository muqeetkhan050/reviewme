import React from 'react';

export default function StatusIcon({ status }) {
  if (status === 'coming') {
    return (
      <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
      </svg>
    );
  }

  if (status === 'not_coming') {
    return (
      <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  }

  // not responded / unknown
  return (
    <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 11.75a.75.75 0 11-1.5 0V9.5a.75.75 0 011.5 0v4.25zM10 7.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  );
}
