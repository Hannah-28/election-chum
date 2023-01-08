import React from 'react';
import UserSidebar from '../components/UserSidebar';

export default function Candidates() {
  return (
    <UserSidebar title="Candidates">
      <div className="h-screen my-10">
        <h1 className="mb-4 text-2xl font-bold">Candidates</h1>
      </div>
    </UserSidebar>
  );
}
