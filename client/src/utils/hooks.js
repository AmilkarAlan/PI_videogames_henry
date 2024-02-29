

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }
  if (!values.released) {
    errors.released = 'La fecha de lanzamiento es requerida';
  } else if (isNaN(Date.parse(values.released))) {
    errors.released = 'La fecha de lanzamiento no es válida';
  } else if (new Date(values.released) > new Date()) {
    errors.released = 'La fecha de lanzamiento no puede ser futura';
  }
  if (!values.rating_top) {
    errors.rating_top = 'La calificación es requerida';
  } 
  if (!values.playtime) {
    errors.playtime = 'El tiempo de juego es requerido';
  } else if (isNaN(Number(values.playtime))) {
    errors.playtime = 'El tiempo de juego debe ser un número';
  } else if (Number(values.playtime) < 0) {
    errors.playtime = 'El tiempo de juego no puede ser negativo';
  } else if (Number(values.playtime) > 800) {
    errors.playtime = 'El tiempo de juego no puede ser tan alto, prueba menos de 800';
  }
  if (!values.platforms || !values.platforms.length) {
    errors.platforms = 'Debes elegir almenos una plataforma';
  }
  if (!values.tags || !values.tags.length) {
    errors.tags = 'Debes elegir almenos una etiqueta';
  }
  return errors;
};

const getUniqueProperties = (games, property, key) => {
  let properties = games.map(game => game[ property ]);
  properties = properties.flat();
  properties = properties.filter((property, index, array) => {
    return array.findIndex(item => item[ key ] === property[ key ]) === index;
  });
  return properties;
};

const filterByProperty = (properties, games, property) => {
  const propertyGames = [];
  properties.map((p) => {
    const filteredGames = games.filter((g)=>
    g[property].some((property)=>property.name === p.name))

    propertyGames.push({ name: p.name, games:filteredGames});
  });

  return propertyGames
};




export {
  validate,
  getUniqueProperties,
  filterByProperty
}