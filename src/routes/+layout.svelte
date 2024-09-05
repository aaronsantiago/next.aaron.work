<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css'

	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';

	import { getSidebarTitle } from '$lib/sidebar.svelte.js';

	export let data;
	let sidebarTitle = getSidebarTitle();
</script>

{#await import('$lib/fluid') then}
	<script>
		window.setupFluid();
	</script>
{/await}
<div class="relative overflow-clip w-screen h-screen">
	<div
		id="fluid-wrapper"
		class="absolute w-[110vw] h-[110vh] overflow-clip top-[-5vh] left-[-5vw]"
	></div>
	<div class="absolute w-screen h-screen overflow-clip">
		<div
			class="font-rubik text-[2dvw] mix-blend-difference absolute bottom-0 left-[0.5dvw] z-50 flex flex-col justify-end"
		>
			<span class="mr-[2dvh]">
				<div><a class="text-white opacity-70 transition-opacity hover:opacity-100" href={base + '/'}>about</a></div>
				<div><a class="text-white opacity-70 transition-opacity hover:opacity-100" href={base + '/'}>contact</a></div>
			</span>
		</div>
		{#if sidebarTitle.sidebarTitle != ''}
			<div
				in:fly|global={{ x: -100, duration: 220, delay: 100, easing: quintOut }}
				out:fly|global={{ x: -100, duration: 220, delay: 250, easing: quintIn }}
				class="font-rubik text-white mix-blend-difference text-[4dvw] absolute bottom-[5dvw] left-[0.5dvw] z-50 align-text-bottom">
				<a class="text-white opacity-70 transition-opacity hover:opacity-100" href={base + '/'}><i class="fa-solid fa-angle-left mr-[-2dvw]"></i></a>
				<a class="text-white opacity-70 transition-opacity hover:opacity-100" href={base + '/'}><i class="fa-solid fa-rotate-left mr-[-2dvw]"></i></a>
				<a class="text-white opacity-70 transition-opacity hover:opacity-100" href={base + '/'}><i class="fa-solid fa-angle-right"></i></a>
			</div>
			<div
				in:fly|global={{ x: 100, duration: 220, delay: 0, easing: quintOut }}
				out:fly|global={{ x: 100, duration: 220, delay: 100, easing: quintIn }}
				class="font-rubik text-white opacity-70 mix-blend-difference text-[4.5dvw] absolute bottom-[5dvw] right-[0.5dvw] z-50 align-text-bottom"
				>{sidebarTitle.sidebarTitle}</div
			>
		{/if}
		<div
			class="font-rubik text-white opacity-70 mix-blend-difference transition-opacity hover:opacity-100 text-[7dvw] absolute bottom-[0dvh] right-[0.5dvw] z-50 flex flex-col justify-end items-end"
			><a href={base + '/'} class="h-[8dvw]"><span class="mr-[2dvh] align-bottom leading-0 h-0">Aaron</span>Santiago</a></div
		>
		{#key data.path}
			<div class="mainContent w-full h-full">
				<div class="w-full h-full overflow-y-scroll">
					<slot />
					<div class="h-[20dvw]"></div>
				</div>
			</div>
		{/key}
	</div>
</div>

<style>
	.mainContent {
		--mask: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 1) 0,
				rgba(0, 0, 0, 1) calc(100% - 20dvh),
				rgba(0, 0, 0, 0) calc(100% - 10dvh),
				rgba(0, 0, 0, 0) 0
			)
			100% 50% / 100% 100% repeat-x;

		-webkit-mask: var(--mask);
		mask: var(--mask);
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
