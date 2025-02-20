<script lang="ts">

  const getWeatherData = async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
    const data = res.json
  }

</script>

<section>
  <header>
    <h2>Section Weather</h2>
  </header>

  <article>
    <div>
      <h1>20 ºC</h1>
      <h4>City: <span>Madrid, ES</span></h4>
      <h4>Weather: <span>Cloudy</span></h4>
    </div>

    <div>
      <h4>Maximun Temperature:<span>23 ºC</span></h4>
      <h4>Minimium Temperature:<span>19 ºC</span></h4>
    </div>
  </article>
</section>

<style>

</style>