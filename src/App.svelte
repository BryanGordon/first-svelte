<script lang="ts">
  import Counter from './lib/Counter.svelte';
import Saludo from './lib/Saludo.svelte';
  //let cont = 0
</script>

<main>
  <Saludo name = 'Bryan'/>
  <Counter count = {1} />
  <Counter count = {0} />
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
