export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchImageFolder = async (folder) => {
	const allImageFiles = import.meta.glob(`../../../static/**/*`, { eager: true });

	// console.log(allImageFiles);
	// const allImages = await Promise.all(
	// 	allImageFiles.map(async ([path, resolver]) => {
	// 		// const image = await resolver();
	// 		const imagePath = path.slice(11, -4);

	// 		return {
	// 			imagePath
	// 		};
	// 	}
	// ));

	// console.log(allImages);
	let images = Object.keys(allImageFiles).map((path) => {
		return path.slice(15);
	});

	return images;

	// return allImageFiles

	return { folder };
};