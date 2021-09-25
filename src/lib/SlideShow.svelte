<script>
  export let images = [];

  let slideShow = initSlideShow(images);
  let showSlide = 0;

  function initSlideShow(images) {
    if(images) {
      return images.map(( image, index ) => {
        return {
          image,
          display: index === 0
        }
      })
    }
  }

  function processSlideShow(slides, nextState) {
    const current = slides.findIndex(slide => slide.display);
    slides[current].display = false;
    return slides.map(( slide, index ) => {
      return {
        ...slide,
        display: index === nextState? true : false
      }   
    });
  }

  $: slideShow = processSlideShow(slideShow, showSlide)
  
</script>
<div>

  {#if slideShow}
    <button disabled="{showSlide === 0 ? true : false }" on:click={() => ( showSlide -= 1 )} aria-label="Previous">
    Previous
    </button>
  <ul>
      {#each slideShow as slide}
        <li style="display: {slide.display ? 'block' : 'none'}">
          <img alt={slide.image.author} src={slide.image.download_url} height=200/>
        </li>
      {/each}
  </ul>
    <button disabled="{showSlide === slideShow.length - 1 ? true : false}" on:click={() => (showSlide += 1)} aria-label="Next">
    Next
    </button>
  {/if}
  </div>
  
<style>
  div {
  display: flex;
  }
  ul {
    width: 250px;
  }
  button {
  width: 30px;
  height: 10px;
  }
</style>
