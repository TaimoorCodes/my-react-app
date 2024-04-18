export const exerciseOptions = {
  method: 'GET',
  headers: {
    
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'e4d4548796mshd3b1dced5467e17p13dd5ajsndcd4852e25b8'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'e4d4548796mshd3b1dced5467e17p13dd5ajsndcd4852e25b8'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}