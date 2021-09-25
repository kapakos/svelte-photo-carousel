<script context="module">
	export const prerender = true;
</script>

<script>
  import Slider from '$lib/Slider.svelte';
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
      <Slider />
		</div>
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>

