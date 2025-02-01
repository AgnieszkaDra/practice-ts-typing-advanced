> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e03-ts-typing-advanced` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` TypeScript: Zaawansowane typowanie

Wykorzystaj [json-server](https://www.npmjs.com/package/json-server) do przechowywania danych o użytkownikach:

- imię
- nazwisko
- data urodzenia
- login
- adres email
- hasło w formie [skrótu](https://pl.wikipedia.org/wiki/Funkcja_skr%C3%B3tu)-a

Następnie napisz rozwiązanie, które pozwoli się rejestrować (zapisywać dane do APU) oraz logować (sprawdzać czy taki użytkownik istnieje).

Plik `json` z danymi przechowuj w katalogu `04`. Tak przygotuj typy, aby można było je w wygodny sposób wykorzystać podczas rejestracji oraz logowania.


PS1. Jeśli hasło przechowujemy w formie skrótu (hash-a) to podczas logowania wystarczy zamienić hasło na skrót i porównywać czy takie występuje w bazie/API - w ten sposób zachowujemy większe bezpieczeństwo niż zapisywać jawnie hasło i je porównywać.

PS2. Do tworzenia skrótu możesz wykorzystać poniższe rozwiązanie:

```
async function hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password); // Konwertuj hasło na bajty
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Oblicz hash
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Konwertuj wynik na tablicę bajtów
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join(''); // Na format hex
    return hashHex;
}

// Przykładowe użycie
hashPassword("mojeBezpieczneHaslo").then((hash: string) => {
    console.log("Hash:", hash);
});
```

 
&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-advanced)**

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:


npm run json-server

npm run dev

1. dlaczego to nie działa

const url = 
    'http://localhost:5000/users';
      function load(url: string) {
        return fetch(url).then(resp => resp.json());
      }
     
    load().then(data => console.log(data));
      
róznica między json-server a jsonplaceholder
