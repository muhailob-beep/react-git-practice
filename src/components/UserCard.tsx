import React from 'react';

interface UserCardProps {
  name: string;
  role: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, role }) => {
  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Роль в системі: {role}</p>
    </div>
  );
};
