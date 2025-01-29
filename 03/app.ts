type Pokemon = {
    name: string;
};
  
  async function request<T>(
    url: RequestInfo,
    options?: RequestInit
  ): Promise<T> {
    const resp = await fetch(url, options);
    if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);
  
    return await resp.json();
  }
  
  (async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'; 
    const id = 21; 
  
    try {
      const data = await request<Pokemon>(`${url}/${id}`, {
        method: 'GET', 
      });
        console.log(`Name: ${data.name}`);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  })();