<script lang="ts">
  export let count: number
  const increment = () => { 
    count += 1
  }
</script>

<h3>el valor es: {count}</h3>
<button on:click={increment}>Increment</button>
