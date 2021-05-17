export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=gwXFfhW5xiAH0lP0NMb596fHhLLe0FHh`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gif;
};
