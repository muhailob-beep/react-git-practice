import React from 'react';

interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <div style={{ padding: '20px', border: '2px solid #e2e8f0', borderRadius: '12px' }}>
      {avatarUrl && <img src={avatarUrl} alt={name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />}
      <h3>{name}</h3>
      <p>Посада: {role}</p>
    </div>
  );
};
