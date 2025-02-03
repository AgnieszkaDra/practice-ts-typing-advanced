type PokemonCharacteristic = {
  name: string;
  weight: number;
  abilities: {
      ability: {
          name: string;
      };
  }[];
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
    const id = 20; 
  
    try {
      const data = await request<PokemonCharacteristic>(`${url}/${id}`, {
        method: 'GET', 
      });
        console.log(`Name: ${data.name}`);
        console.log(`Weight: ${data.weight}`);
        data.abilities.forEach((ability) => {
          console.log(`Ability: ${ability.ability.name}`);
        });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  })();