<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	export let data;
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
			class="font-rubik text-white opacity-100 mix-blend-difference text-[2dvw] absolute bottom-0 left-[0.5dvw] z-50 h-full flex flex-col justify-end"
		>
			<span class="mr-[2dvh]">
				<div><a href={base + "/"}>about</a></div>
				<div><a href={base + "/"}>contact</a></div>
			</span>
		</div>
		<a
			href={base + '/'}
			class="font-rubik text-white opacity-100 mix-blend-difference text-[4.5dvw] absolute bottom-[7dvh] right-[0.5dvw] z-50 align-text-bottom"
			>Kinetic Diffusion</a
		>
		<a
			href={base + '/'}
			class="font-rubik text-white opacity-100 mix-blend-difference text-[7.5dvw] absolute bottom-[-4dvh] right-[0.5dvw] z-50 align-text-bottom"
			><span class="mr-[2dvh]">Aaron</span>Santiago</a
		>
		{#key data.path}
			<div class="mainContent w-full h-full"><slot /></div>
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
