'use client';
import { userProfile } from "../context/User";
export default async function UserInfo() {
  const user = userProfile()
  return (
    <main>
      {user?.id}
      {user?.username}
    </main>
  );
}
