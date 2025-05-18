import { defineConfig, defaultClientConditions } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const conditions = process.env.AWS_PULL_REQUEST_ID ? [
    ...defaultClientConditions,
    "pull_request_preview"
  ] : undefined;
  return {
    plugins: [react()],
    resolve: {
      conditions
    }
  }
});
