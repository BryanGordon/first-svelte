const key = import.meta.env.VITE_API_KEY_WEATHER
let emptyError = 'someting goes wrong :('

export const getWeatherData = async (cityName: String = 'Madrid') => {
  try {
    if (cityName.trim() === '') {
      emptyError = 'Invalid city'
      throw new Error(emptyError)
    }
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`)
    .then(res => res.json())
  } 
  catch (error) {
    throw new Error(emptyError)
  }
}
