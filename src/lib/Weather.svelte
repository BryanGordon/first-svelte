<script lang="ts">
  const key = import.meta.env.VITE_API_KEY_WEATHER
  let cityName = ''
  let emptyError = 'someting goes wrong :('

  const getWeatherData = async (cityName: string = 'Madrid') => {
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
  
  let promise = getWeatherData()

  const searchCity = (e: Event) => {
    e.preventDefault()
    promise = getWeatherData(cityName)
  }
</script>

<section>

  <article class="searching">
    <label for="search">Search by city: </label>
    <input
      bind:value={cityName}
      id="search"
      type="text"
      placeholder="Washington"
      >
    <button type="submit" on:click={(e) => searchCity(e)}>Search</button>
  </article>

  {#await promise}
    Loading ...
  {:then data}
    {#if data.cod === '404'}
      <h3>City not found</h3>
      {:else}
      <article>
        <div>
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={`current weather in ${data.name}`}>
          <h1>{data.main.temp}ºC</h1>
          <h4>City: {data.name}, {data.sys.country}</h4>
          <h4>Weather: {data.weather[0].description}</h4>
        </div>
  
        <div>
          <h4>Maximun Temperature: {data.main.temp_max}ºC</h4>
          <h4>Minimium Temperature: {data.main.temp_min}ºC</h4>
        </div>
      </article>
    {/if}
  {:catch error}
    <h3>{error}</h3>
  {/await}

</section>

<style>

</style>