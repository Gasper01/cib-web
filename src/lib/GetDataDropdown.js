import Cookies from 'js-cookie';
const token = Cookies.get('token');

export async function GetDestinos() {
  const res = await fetch('https://full-api.vercel.app/destinations/', {
    cache: 'no-store',
    mode: 'cors',
    headers: {
      Origin: 'https://cib-web.vercel.app',
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export async function GetMotoristas() {
  const res = await fetch('https://full-api.vercel.app/motoristas/', {
    cache: 'no-store',
    mode: 'cors',
    headers: {
      Origin: 'https://cib-web.vercel.app',
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function GetLocation(search) {
  try {
    const res = await fetch(
      `https://full-api.vercel.app/destinations/${search}`,
      {
        cache: 'no-store',
        mode: 'cors',
        headers: {
          Origin: 'https://cib-web.vercel.app',
          'x-access-token': token,
          'Content-Type': 'application/json',
        },
      }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
