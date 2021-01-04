function pokecard(name, image, type, exp) {
    return (
      <div className="pokecard">
        <h1>{name}</h1>
        <img src={image}></img>
        <span>Type: {type}</span>
        <span>EXP: {exp}</span>
      </div>
    );
  }

export pokecard