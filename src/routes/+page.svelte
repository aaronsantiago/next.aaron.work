<script>
	import { base } from '$app/paths';
	import clsx from 'clsx';

	import { scale, fade, slide, fly } from 'svelte/transition';
	import { projectAnim } from '../projectAnim';
	import { quintIn, quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { getSidebarTitle } from '$lib/sidebar.svelte.js';
	export let data;

	let [send, receive] = projectAnim({
		fallback: (node, params, flyingTo) =>
			fade(node, {
				duration: 300,
				delay: flyingTo ? 200 : 0
			}),
		delay: 0,
		duration: (d) => Math.max(700, Math.sqrt(d) * 30)
	});

	let ordering = data.projects.map((p, i) => i);

	let sidebarTitle = getSidebarTitle();

	onMount(() => {
		ordering = ordering.sort(() => Math.random() - 0.5);
		console.log(ordering);
		sidebarTitle.setSidebarTitle("")
	});
</script>

<div class="w-full">
	<div class="grid grid-cols-6 gap-6 m-6 grid-flow-dense">
		{#each data.projects.filter((p) => !p.meta.hidden) as project, i}
			<a
				href={base + project.path}
				class={clsx(
					`w-full h-full min-h-[15dvw]`,
					{
						'col-span-1': project.meta.size === 'small',
						'col-span-2 row-span-2 min-h-[30dvw]':
							project.meta.size != 'small' && project.meta.size != 'big',
						'col-span-3 row-span-3 min-h-[45dvw]': project.meta.size === 'big'
					},
					`opacity-75 hover:opacity-100 transition-opacity relative`,
					'rounded-3xl',
					'drop-shadow-md'
				)}
				in:fly|global={{ x: -100, duration: 120, delay: 500 + ordering[i] * 10, easing: quintOut }}
				out:fly|global={{ x: -100, duration: 120, delay: ordering[i] * 10, easing: quintIn }}
				style={`background-image: url(${base + '/' + project.meta.cardImage}); background-position: center; background-size:cover;`}
			>
				<div
					class={clsx(
						'font-rubik',
						{
							'text-[1.5dvw] leading-[1.8dvw]': project.meta.size === 'small',
							'text-[4dvw] leading-[3.8dvw]': project.meta.size != 'small' && project.meta.size != 'big',
							'text-[5dvw] leading-[4.5dvw]': project.meta.size === 'big'
						},
						'absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center mix-blend-difference text-[#fff] rounded-3xl w-full h-full opacity-100'
					)}
				>
					<div class="text-center">{project.meta.title}</div>
				</div>
				<!-- style={`background-image: url(${base +"/"+ project.meta.cardImage}); background-position: center; background-size:cover;`} -->
			</a>
		{/each}
	</div>
</div>
