export default async function Search(search){

    const response = await fetch(`https://full-api.vercel.app/products/search/${search}`, {
        method: 'GET',
        cache: 'no-store',
        mode: "cors",
         headers: {
          Origin:'https://cib-web.vercel.app',
          'Content-Type': 'application/json',
        },
        credentials: "include",
      
      });

      return response.json()

}

