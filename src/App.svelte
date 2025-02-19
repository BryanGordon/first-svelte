<script lang="ts">
  let cont = 0
</script>

<main>
  <h1>App</h1>
  <span class={ cont > 5 ? 'positive' : 'negative'}>Counter: {cont}</span>
  <button on:click={cont++}>Increment</button>
  <button on:click={cont = 0 }>Reset</button>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  span {
    margin-right: 10px;
  }

  button {
    margin-inline: 10px;
  }

  .positive {
    color: green;
  }

  .negative {
    color: crimson;
  }

</style>
