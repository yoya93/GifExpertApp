export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=I5MDZwZS4vA0bRWRJrNH0Ncu3XKZK4TV`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((g) => {
    return {
      id: g.id,
      title: g.title,
      url: g.images?.downsized_medium.url,
    };
  });
  return gifs;
};
