import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ site: 'https://dogs-tail-and-paws.kieran-somers5.chatgpt.site', output: 'static', devToolbar: { enabled: false }, vite: { plugins: [tailwindcss()] } });
