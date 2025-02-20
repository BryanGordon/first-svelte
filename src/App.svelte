<script lang="ts">
  // import Counter from './lib/Counter.svelte';
  // import Saludo from './lib/Saludo.svelte';
  // let cont = 0
    import Message from './lib/Message.svelte';

    let aux = false 
    const handleToggle = () => {
      aux = !aux
    }

</script>

<main>
  {#if aux}
    <Message />
    {:else} 
      <div>
        <h1>No es una alerta</h1>
      </div>
  {/if}

  <button on:click={handleToggle}>Hidden/Show</button>
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
