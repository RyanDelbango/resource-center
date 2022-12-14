import React from 'react';
import Link from 'next/link';

interface MaterialCardProps {
    material: string,
}

const MaterialCard = ({material}: MaterialCardProps) => {
  return (
    <div className="card">
      <h1 className="card-subtitle mb-2 text-muted">
        <Link href="/users/user">{material}</Link>
      </h1>
    </div>
  );
};

export default MaterialCard;
