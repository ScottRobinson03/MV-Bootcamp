async function getPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    data = await response.json()
    
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.innerText = data.name;
    body.append(p);
}

getPokemon();

// function divide(x, y) {
//     return new Promise((resolve, reject) => {
//         if (typeof(x) !== 'number' || typeof(y) !== 'number') {
//             reject("Both inputs must be a number");
//         } else if (y === 0) {
//             reject("Cannot divide by 0");
//         } else {
//             resolve(x / y);
//         }
//     });
// }

// divide(10, 2)
//   .then(response => console.log(response))
//   .catch(err => console.log(err));