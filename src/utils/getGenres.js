export const getGenres = genres => {
  const allGenres = genres
    .map(el => {
      return el.name;
    })
    .join(', ');
  return allGenres;
};
