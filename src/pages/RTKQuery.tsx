import { Loader } from '@/components/ui/Loader/Loader';
import { useGetUsersQuery } from '@/store/usersApi';
import React from 'react';

const RTKQuery: React.FC = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {isLoading && <Loader />}
      {!!users?.length && users.map(({
        address, company, email, id, name, phone, website,
      }) => (
        <div
          key={id}
          className="flex flex-col bg-violet-400 px-4 py-2 rounded-lg"
        >
          <div>{name}</div>
          <div>{address.city}</div>
          <div>{phone}</div>
          <div>{website}</div>
          <div>{email}</div>
          <div>{company.name}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(RTKQuery);
