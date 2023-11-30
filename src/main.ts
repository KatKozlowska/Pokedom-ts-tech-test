import "./styles/style.scss";

import {pokemonArray as pokemon} from "./data/pokemon"


const cardContainer = document.querySelector<HTMLElement>(".card-container")
if (!cardContainer){
    throw new Error ("issiue with selector");
}

const renderPokemon = () => {
    
    for (const card of pokemon) {
        cardContainer.innerHTML += `<section class="card">
        <img class="card__image" src=${card.sprite}> 
        <div class="card__content">
        <span class="card__heading" style=text-transform:capitalize>${card.name}</span>
        <p class="card__text"><span class="card__text" style=text-transform:capitalize  >${card.name}</span> (#${card.id}) is a ${card.types} type pokemon.</p>
        </div>
        </section>`
    }
};


document.addEventListener("DOMContentLoaded", renderPokemon);


