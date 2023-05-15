
export async function getUser() {
    const res = await fetch('https://full-api.vercel.app/user', {
      cache: 'no-store',
      mode: "cors",
      headers: {
        Origin:'https://cib-web.vercel.app',
       'Content-Type': 'application/json',
     },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }