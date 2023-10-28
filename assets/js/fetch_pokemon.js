let pokeImg = document.querySelector("footer #pokeApi #pokeImg");
let pokeName = document.querySelector("#pokeName");


const randomNumber = Math.floor(Math.random() * 1292)+1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
  .then((result) => result.json())
  .then((data) => {
    pokeImg.src = data.sprites.other["official-artwork"].front_default;
    pokeName.innerHTML = data.forms[0].name;
  });

/**/
