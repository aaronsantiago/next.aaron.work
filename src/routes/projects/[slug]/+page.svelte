<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<div>
	<div>{data.title}</div>
	<svelte:component this={data.content} />
</div>