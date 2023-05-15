
import { getUser } from "./lib/getUser";
export default async function Page() {
  const res = await getUser();

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
