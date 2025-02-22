<script>
  export let data
</script>

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

<style>

</style>