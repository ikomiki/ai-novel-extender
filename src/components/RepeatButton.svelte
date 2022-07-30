<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let value = 5;
  const dispatch = createEventDispatcher();

  function handleClick() {
    console.log('repeat handleClick', value)
    dispatch('notify', {
      repeatCount: value,
    });
  }
</script>

<div>
  <input type="button" on:click={handleClick} id="repeatbutton" class="btn-square" value="リピート" style="font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(153, 95, 39); border-color: rgb(123, 75, 19); width: 23vw; margin-right: 2vw; margin-top: 3vw;" />
  <label>リピート数<input id="repeat-count" type="number" min="2" max="10" bind:value={value} /></label><br />

</div>
