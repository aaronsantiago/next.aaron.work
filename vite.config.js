import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp', '**/*.JPG', '**/*.PNG', '**/*.WEBP'],
	plugins: [sveltekit()]
});
