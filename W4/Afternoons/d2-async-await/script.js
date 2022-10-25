async function getAllPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data = await response.json();
    const pokemonNames = [];
    for (let pokemon of data.results) {
        pokemonNames.push(pokemon.name);
    }
    return pokemonNames;
}

async function getPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
}

const displayedPokemon = []
let pokemonList;

async function main() {
    pokemonList = await getAllPokemon();

    const body = document.querySelector("body");
    body.innerHTML = `<label for="pokemonInput">Enter Pokemon Name</label>
    <input type="text" name="pokemonInput" id="pokemonInput">

    <section class="flex">
        <table></table>
        <section class="grid"></section>
    </section>`

    const pokemonInput = document.getElementById("pokemonInput");
    pokemonInput.addEventListener('input', () => {
        const name = pokemonInput.value.toLowerCase();
        if (!name) return;

        resetTable();

        const matches = []
        for (let pokemon of pokemonList) {
            if (pokemon.startsWith(name)) {
                matches.push(pokemon);
            }
        }
        createTable(matches);
        const label = document.querySelector("label");
        label.innerText = `Enter Pokemon Name (${matches.length} ${matches.length === 1 ? "match" : "matches"})`;
    })
}
main();

function getPokemonDataDiv(data) {
    const div = document.createElement("div");
    div.id = data.name;
    
    const img = document.createElement("img");
    const possibleImgSrcs = [data.sprites.front_shiny, data.sprites.front_default, data.sprites.front_female];
    for (let sprite_url of possibleImgSrcs) {
        if (sprite_url) {
            img.src = sprite_url;
            break;
        }
    }
    if (!img.src) img.src = "./assets/no-image-available.webp"

    const p = document.createElement("p");

    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const specialAttack = data.stats[3].base_stat;
    const specialDefense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;

    p.innerText = `${data.name} has the following stats:\n
      HP: ${hp}\nAttack: ${attack}\nDefense: ${defense}\nSpecial Attack: ${specialAttack}\nSpecial Defense: ${specialDefense}\nSpeed: ${speed}`;
    div.append(img, p);
    return div;
}

function resetTable() {
    const table = document.querySelector("table");
    table.replaceChildren();
}

function createTable(matches) {
    matches.sort();
    let numCols;
    let dividesExactly = true;
    if (matches.length > 100) {
        numCols = 7;
        dividesExactly = matches.length % 7 == 0;
    }
    else if (matches.length > 50) {
        numCols = 5;
        dividesExactly = matches.length % 5 == 0;
    }
    else if (matches.length % 5 == 0) numCols = 5;
    else if (matches.length % 4 == 0) numCols = 4;
    else if (matches.length % 3 == 0) numCols = 3;
    else if (matches.length % 2 == 0) numCols = 2;
    else {
        numCols = 5;
        dividesExactly = false;
    }

    const table = document.querySelector("table");
    let tr;
    for (let i = 0; i <= (dividesExactly ? matches.length : matches.length - matches.length % numCols); i++) {
        if (i % numCols == 0) {
            if (tr) table.append(tr);
            tr = document.createElement("tr");
        }
        const td = document.createElement("td");
        const btn = createButton(matches[i]);
        td.append(btn);
        tr.append(td);
    }

    if (!dividesExactly) {
        const tr = document.createElement("tr");
        for (let i = matches.length - matches.length % numCols; i < matches.length; i++) {
            const td = document.createElement("td");
            const btn = createButton(matches[i]);
            td.append(btn);
            tr.append(td);
        }
        table.append(tr);
    }
}

function removePokemonData(pokemonName) {
    const div = document.getElementById(pokemonName);
    div.remove();
    displayedPokemon.splice(displayedPokemon.indexOf(pokemonName), 1)
}

function createButton(pokemonName) {
    const btn = document.createElement("button");
    btn.innerText = pokemonName;
    btn.addEventListener("click", () => {
        if (displayedPokemon.includes(pokemonName)) {
            removePokemonData(pokemonName)
            return;
        }
    
        getPokemon(pokemonName)
          .then(data => {
            const div = getPokemonDataDiv(data);
            if (displayedPokemon.length == 8) {
                const oldestPokemonDiv = document.getElementById(displayedPokemon[0]);
                oldestPokemonDiv.replaceWith(div);
                displayedPokemon.splice(0, 1); // remove first element
            } else {
                const section = document.querySelector("section.grid");
                section.append(div);
            }
            displayedPokemon.push(pokemonName);
          }).catch(err => console.log(err));
    });
    return btn;
}