// src/routes/api/posts/+server.js
import { fetchImageFolder } from '$lib/utils';
import { json } from '@sveltejs/kit';

export async function GET() {
	const allImages = await fetchImageFolder();

	return json({ allImages });
}
