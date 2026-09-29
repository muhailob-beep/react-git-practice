import React from 'react';

interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <div style={{ padding: '16px', border: '1px solid #3182ce', backgroundColor: '#ebf8ff', borderRadius: '8px' }}>
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
        />
      )}
      <h2 style={{ color: '#2b6cb0' }}>Користувач: {name}</h2>
      <p>Спеціалізація: {role}</p>
      <button
        type="button"
        style={{ backgroundColor: '#3182ce', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px' }}
      >
        Переглянути профіль
      </button>
    </div>
  );
};
