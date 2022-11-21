export function CreateListSection(properties) {
    return (
        <section id={properties.id}>
            <h2>{properties.title}</h2>
            <ul>
                {properties.listItems.map(item => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </section>
    );
}

export function CreateImageSection(properties) {
    return (
        <section id={properties.id}>
            {properties.images.map(img => {
                return (
                    <img
                        key={img.name}
                        src={require(`./assets/${img.name}.${img.format}`)}
                        alt={img.name}
                    />
                );
            })}
        </section>
    );
}
