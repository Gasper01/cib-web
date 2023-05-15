
import { GetUser } from "./lib/getUser";
export default async function Page() {
  const res = await GetUser();

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
