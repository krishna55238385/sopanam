import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                programs: resolve(__dirname, 'programs.html'),
                team: resolve(__dirname, 'team.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                blog: resolve(__dirname, 'blog.html'),
                wallOfLove: resolve(__dirname, 'wall-of-love.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
});
