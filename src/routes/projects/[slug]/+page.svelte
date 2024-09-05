<!-- src/routes/[slug]/+page.svelte -->
<script>
	import clsx from 'clsx';
	import {base} from '$app/paths';
	import { scale, fade, slide, fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';

	import { getSidebarTitle } from '$lib/sidebar.svelte.js';
	import { onMount } from 'svelte';

	export let data;

	let sidebarTitle = getSidebarTitle();

	onMount(() => {
		sidebarTitle.setSidebarTitle(data.title);
	});

</script>

<div class="w-full grid grid-cols-2 grid-flow-dense">
	<div 
	in:fly|global={{ x: -100, duration: 400, delay:400, easing: quintOut }}
	out:fly|global={{ x: -100, duration: 200, delay:100, easing: quintIn }}
	class={clsx(
		"text-4xl font-rbk",
		`opacity-75 bg-[#fffB] p-10 m-4`,
		'rounded-3xl drop-shadow-md',
		// "w-full"
	)}><svelte:component this={data.content} /></div>
	<!-- <div class=""
		in:fly|global={{ x: 100, duration: 400, delay:600, easing: quintOut }}
		out:fly|global={{ x: 100, duration: 200, easing: quintIn }}> -->
		{#each data.images as image}
			<div class="w-full h-full">
				<img src={base + image} alt="" class="object-cover" />
			</div>
		{/each}
	<!-- </div> -->
</div>