'use client';
import { UserProfile } from "../context/User";
export default async function UserInfo() {
  const user = UserProfile()
  return (
    <main>
      {user?.id}
      {user?.username}
    </main>
  );
}
