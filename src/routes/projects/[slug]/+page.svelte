<!-- src/routes/[slug]/+page.svelte -->
<script>
	import clsx from 'clsx';
	import {base} from '$app/paths';
	import { scale, fade, slide, fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';

	import { getSidebarTitle } from '$lib/sidebar.svelte.js';
	import { onMount } from 'svelte';

	let {data} = $props();

	let sidebarTitle = getSidebarTitle();

	let modalImage = $state("")

	onMount(() => {
		sidebarTitle.setSidebarTitle(data.title);
	});

</script>

<div class="w-full grid grid-cols-2 grid-flow-dense gap-6 p-6">
	<div 
	in:fly|global={{ x: -100, duration: 400, delay:400, easing: quintOut }}
	out:fly|global={{ x: -100, duration: 200, delay:100, easing: quintIn }}
	class={clsx(
		"text-4xl font-rbk",
		`opacity-75 bg-[#fffB] p-10`,
		'rounded-3xl drop-shadow-md max-h-[40dvw] overflow-y-scroll',
		// "w-full"
	)}><svelte:component this={data.content} /></div>
	<!-- <div class=""
		in:fly|global={{ x: 100, duration: 400, delay:600, easing: quintOut }}
		out:fly|global={{ x: 100, duration: 200, easing: quintIn }}> -->
		{#each data.images as image}
			<div class={clsx(`w-full h-full min-h-[40dvw]`,
			`opacity-75 hover:opacity-100 transition-opacity relative`,
			'rounded-3xl',
			'drop-shadow-md'
		)}
		on:click={() => modalImage = base + image}
		style={`background-image: url(${base + image}); background-position: center; background-size:cover;`}
			>
				<!-- <img src={base + image} alt="" class="object-cover" /> -->
			</div>
		{/each}
	<!-- </div> -->
</div>

{#if modalImage}
	<div 
	in:fade|global={{ x: -100, duration: 400, easing: quintOut }}
	out:fade|global={{ x: -100, duration: 200, easing: quintIn }}
	class="absolute top-0 left-0 w-full h-full bg-[#000a]"
		on:click={() => modalImage = ""}
	>
		<div class="w-full h-full">
			<img src={modalImage} alt="" class="object-contain object-center w-full h-full" />
			</div>
	</div>
{/if}