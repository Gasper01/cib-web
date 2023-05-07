async function getData() {
  const res = await fetch('https://full-api.vercel.app/user', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const res = await getData();

  return (
    <main>
      <ul>
        {res.data.map((data) => (
          <li key={data.id}>{data.username}</li>
        ))}
      </ul>
    </main>
  );
}
