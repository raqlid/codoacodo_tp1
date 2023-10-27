let characterImage = document.querySelector("#apiFrame #image");
let characterName = document.querySelector("#apiFrame #name");
let characterStatus = document.querySelector("#apiFrame #status");
let characterSpecie = document.querySelector("#apiFrame #specie");

const randomNumber = Math.floor(Math.random() * 826);

fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)
  .then((result) => result.json())
  .then((data) => {
    // console.log(data);
    characterImage.src = data.image;
    characterName.innerHTML = data.name;
    characterStatus.innerHTML = data.status;
    characterSpecie.innerHTML = data.species;
  });

/*
created: "2020-05-02T13:46:10.906Z"
episode: Array [ "https://rickandmortyapi.com/api/episode/33" ]
gender: "Female"
id: 533
image: "https://rickandmortyapi.com/api/character/avatar/533.jpeg"
location: Object { name: "Monogatron Mothership", url: "https://rickandmortyapi.com/api/location/83" }
name: "Monogatron Queen"
origin: Object { name: "unknown", url: "" }
species: "Alien"
status: "Alive"
type: "Monogatron"
url: "https://rickandmortyapi.com/api/character/533"
  */
