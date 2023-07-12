const API_KEY = 'fLQeoVPfc1OCu8jEGJpsjm7PlNGzTAkekuENEvUQ';
const baseURL = 'https://api.nasa.gov';

const getMarsPhotos = async (rover: string, page: number, camera: string, date: string, timeZone: string = 'earth_date') => {
  const json = await fetch(
    `${baseURL}/mars-photos/api/v1/rovers/${rover.toUpperCase()}/photos?${timeZone}=${date}&${camera ? `camera=${camera.toLowerCase()}` : ''}&page=${page}&api_key=${API_KEY}`
  );
  const strategies = await json.json()

  return strategies;
}

export default getMarsPhotos;