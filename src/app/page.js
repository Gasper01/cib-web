async function getData() {
  const res = await fetch('http://localhost:400/user', {
    cache: 'no-store',
    mode: "cors",
    headers: {
      Origin:'http://localhost:3000',
     'Content-Type': 'application/json',
   },
  });
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
        {res.map((data) => (
          <li key={data.id}>{data.username}</li>
        ))}
      </ul>
    </main>
  );
}
