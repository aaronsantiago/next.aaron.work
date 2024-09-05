<!-- src/routes/[slug]/+page.svelte -->
<script>
	import clsx from 'clsx';
	import {base} from '$app/paths';
	import { scale, fade, slide, fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';

	export let data;

</script>

<div class="w-full h-full overflow-y-scroll flex">
	<div 
	in:fly|global={{ x: -100, duration: 400, delay:400, easing: quintOut }}
	out:fly|global={{ x: -100, duration: 200, delay:100, easing: quintIn }}
	class={clsx(
		"text-4xl font-rbk",
		`opacity-75 bg-[#fffB] p-10 m-4`,
		'rounded-3xl drop-shadow-md',
		"w-full"
	)}><svelte:component this={data.content} /></div>
	<div class="w-full"
		in:fly|global={{ x: 100, duration: 400, delay:600, easing: quintOut }}
		out:fly|global={{ x: 100, duration: 200, easing: quintIn }}>
		{#each data.images as image}
			<img src={base + image} alt="" class="object-cover" />
		{/each}
	</div>
</div>