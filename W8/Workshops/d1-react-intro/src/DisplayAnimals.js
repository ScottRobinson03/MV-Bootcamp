export default function DisplayAnimals() {
    const animals = [
        {
            name: "Max",
            species: "Dog",
        },
        {
            name: "Peppa",
            species: "Cat",
        },
        {
            name: "Jumbo",
            species: "Elephant",
        },
    ];

    return (
        <div>
            {animals.map(animal => {
                return (
                    <p>
                        {animal.name} is a {animal.species}
                    </p>
                );
            })}
        </div>
    );
}
