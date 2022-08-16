<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let value = 3;
  const dispatch = createEventDispatcher<{
        notify: {retryCount: number},
    }>();

  function handleClick() {
    console.log('retry handleClick', value)
    dispatch('notify', {
      retryCount: value,
    });
  }
</script>

<span>
  <input type="button" on:click={handleClick} id="repeatbutton" class="btn-square" value="リトライ" style="font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(153, 95, 39); border-color: rgb(123, 75, 19); width: 12em; margin-right: 2vw; margin-top: 3vw;" />
  <label>リトライ数<input id="repeat-count" type="number" min="2" max="10" bind:value={value} /></label><br />

</span>
