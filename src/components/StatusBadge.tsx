import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'inactive';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const isOnline = status === 'active';
  return (
    <span style={{
      padding: '4px 8px',
      borderRadius: '12px',
      backgroundColor: isOnline ? '#38a169' : '#e2e8f0',
      color: isOnline ? '#fff' : '#4a5568',
      fontSize: '12px'
    }}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
};
