// src/routes/blog/[slug]/+page.js
import {base} from '$app/paths';

export const load = async ({ fetch, params }) => {
	const post = await import(`../${params.slug}.md`);
	const { title, date , folder} = post.metadata;
	const content = post.default;

	
	const response = await fetch(`${base}/api/images`);
	let images = await response.json();

	images = images.allImages.filter((image) => {
		return image.startsWith(folder);
	});

	// console.log(images, folder, filteredImages);

	return {
		content,
		title,
		date,
		images
	};
}