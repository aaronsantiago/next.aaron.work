<script>
	import { base } from '$app/paths';
	import clsx from 'clsx';
  
	import { scale, fade, slide, fly } from 'svelte/transition';
	import { projectAnim } from '../projectAnim';
	import { quintOut } from 'svelte/easing';
	export let data;

	
	let [ send, receive ] = projectAnim({
        fallback: (node, params, flyingTo) => fade(node, {
            duration: 300,
            delay: flyingTo ? 200 : 0
        }),
        delay: 0,
        duration: (d) => Math.max(700, Math.sqrt(d) * 30)
    });
</script>

<div class="overflow-y-scroll w-full h-full">
	<div class="grid grid-cols-6 gap-10 m-6 grid-flow-dense">
		{#each data.projects.filter((p) => !p.meta.hidden) as project, i}
			<div
				class={clsx(`w-full h-full min-h-32`, {
					'col-span-1': project.meta.size === 'small',
					'col-span-2 row-span-2 min-h-64': project.meta.size != 'small' && project.meta.size != 'big',
					'col-span-3 row-span-3 min-h-96': project.meta.size === 'big'
				},
        `opacity-75 hover:opacity-100 transition-opacity relative`,
        "rounded-3xl"
        )}

        in:fly|global={{x: -100, duration:100, delay:i * 20, easing: quintOut}}
        out:fly|global={{x: -100, duration:100, delay:i * 20, easing: quintOut}}
				style={`background-image: url(${base +"/albums/becoming/01.png"}); background-position: center; background-size:cover;`}
			>
				<a href={base + project.path}>
					{project.meta.title}
				</a>
				<!-- style={`background-image: url(${base +"/"+ project.meta.cardImage}); background-position: center; background-size:cover;`} -->

			</div>
		{/each}
	</div>
</div>
