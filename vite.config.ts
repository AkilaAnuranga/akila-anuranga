import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/akila-anuranga/',
    server: {
        port: 3000, // optional: match CRA's default port
    },
});
