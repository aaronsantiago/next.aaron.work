// import { assign, is_function } from 'svelte/internal';
import { cubicOut } from 'svelte/easing';

function projectAnim({
	fallback,
	...defaults
}){
	const to_receive= new Map();
	const to_send= new Map();

	function projectAnim(
		target,
		node,
		params,
		inTransition
	) {
    let delay = 0;
    let duration = (d) => Math.sqrt(d) * 30;
    let easing = cubicOut;

    if (defaults) {
      if (defaults.delay) delay = defaults.delay;
      if (defaults.duration) duration = defaults.duration;
      if (defaults.easing) easing = defaults.easing
    }

    if (params) {
      if (params.delay) delay = params.delay;
      if (params.duration) duration = params.duration;
      if (params.easing) easing = params.easing;
    }

		// } = assign(assign({}, defaults), params);

    console.log('projectAnim', target, node, params, inTransition);

		const from = node.getBoundingClientRect();
		const dx = target.left - from.left;
		const dy = target.top - from.top;
		const dw = target.width - from.width;
		const dh = target.height - from.height;
		const d = Math.sqrt(dx * dx + dy * dy);

		if (!inTransition) console.log(target.x, target.y, target.height, target.width, dw, dh);

		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			delay,
			duration: is_function(duration) ? duration(d) : duration,
			easing,
			css: (t, u) => `
					position: absolute;
					z-index: 10;
					opacity: ${inTransition ? 1 : 0};
					width: ${from.width + u * dw}px;
					height: ${from.height + u * dh}px;
					transform: ${transform} translate(${u * dx}px,${u * dy}px);
				`
		};
	}

	function transition(items, counterparts, inTransition) {
		return (node, params) => {
			items.set(params.key, {
				rect: node.getBoundingClientRect()
			});

			return () => {
        console.log('checking transitons', params.key, counterparts);
				if (counterparts.has(params.key)) {
					const { rect } = counterparts.get(params.key);
					counterparts.delete(params.key);

					return projectAnim(rect, node, params, inTransition);
				}

				// if the node is disappearing altogether
				// (i.e. wasn't claimed by the other list)
				// then we need to supply an outro
				items.delete(params.key);

				//@ts-ignore
				return fallback && fallback(node, params, inTransition);
			};
		};
	}

	return [
		transition(to_send, to_receive, false), // Out transition
		transition(to_receive, to_send, true) // In transition
	];
}

export { projectAnim };