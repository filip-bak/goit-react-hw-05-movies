export function getImagePath({ size, path } = {}) {
  if (path === null) return;
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
}
