<script lang="ts">
  import { getWeatherData } from '../store/weatherData';
    import InfoWeather from './views/InfoWeather.svelte';

  let cityName = ''
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
        <InfoWeather data = {data}/>
    {/if}
  {:catch error}
    <h3>{error}</h3>
  {/await}

</section>

<style>
  .searching {
    margin-bottom: 30px;
  }

  input {
    padding-block: 7px;
    border-radius: 25px;
    border-style: none;
    background-color: rgba(64, 63, 63, 0.756);
    text-indent: 10px;
  }

  input:active {
    border-style: inset;
  }

</style>