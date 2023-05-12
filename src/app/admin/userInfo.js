'use client';
import verifyUser from './verifyUser';

export default async function UserInfo() {
  const res = await verifyUser();
  console.log(res);
  return (
    <main>
      <ul>
        {res.map((data) => (
          <li key={data.id}>{data.username}</li>
        ))}
      </ul>
    </main>
  );
}
