<script>
  import SlideShow from '$lib/SlideShow.svelte';
  const promise = fetch("https://picsum.photos/v2/list?page=2&limit=4")
    .then(response => response.json())
</script>

<div class="slider">
  <ul>
    {#await promise}
      <p>...loading images</p>
      {:then images}
        <SlideShow images={images}/>
      {:catch error} 
        <p>{error.message}</p>
      {/await}
  </ul>
</div>

<style>
  .slider {

  }
</style>

