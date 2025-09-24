import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
	plugins: [vue(), viteSingleFile(), tailwindcss()],
	base: './',
	root: './ui',
	build: {
		outDir: '../iframe/chat',
	},
});
