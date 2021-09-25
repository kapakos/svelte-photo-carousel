<script>
  export let images=[];
  import initSlideShow from './initSlideShow';
</script>
<script>

</script>

<ul>
  {#if slideShow}
      {#each  slideShow as slide}
        <li><img alt={slide.image.author} src={slide.image.download_url} height=200/></li>
      {/each}
  {/if}
</ul>

<style>
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    padding: 10px;
  }
</style>
