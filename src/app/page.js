async function getData() {
  const res = await fetch('http://localhost:400/user', {
    cache: 'no-store',
    headers: {
      Origin: 'http://localhost:3000', // Agregar la cabecera Origin con el valor del origen permitido
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
