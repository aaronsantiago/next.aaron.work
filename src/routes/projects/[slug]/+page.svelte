<!-- src/routes/[slug]/+page.svelte -->
<script>
	import clsx from 'clsx';
	import { scale, fade, slide, fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';

	export let data;
</script>

<div>
	<div 
	in:fly|global={{ x: -100, duration: 400, delay:400, easing: quintOut }}
	out:fly|global={{ x: -100, duration: 400, easing: quintIn }}
	class={clsx(
		"text-4xl font-rbk",
		"w-1/2 h-full",
		`opacity-75 bg-[#fffB] p-10 m-4`,
		'rounded-3xl',
		'drop-shadow-md'
	)}><svelte:component this={data.content} /></div>
</div>