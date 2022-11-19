<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let caption: string;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('notify', {});
  }
</script>


<span>
  <input type="button" on:click={handleClick} class="btn-square" style="font-size: 18px;color: rgb(255, 255, 255);background-color: rgb(153, 95, 39);border-color: rgb(123, 75, 19);width: 8em;margin-right: 2vw;margin-top: 3vw;" value={caption}>
</span>

