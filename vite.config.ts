import { defineConfig, defaultClientConditions } from 'vite';
import react from '@vitejs/plugin-react';

// 環境変数から現在の実行環境を判断する
const isPullRequestPreview = !!process.env.AWS_PULL_REQUEST_ID;

// https://vitejs.dev/config/
export default defineConfig(() => {
  // モックを使用すべき環境であればconditionsを設定する
  const conditions = isPullRequestPreview ? [
    ...defaultClientConditions,
    "pull_request_preview"
  ] : undefined;

  return {
    plugins: [react()],
    resolve: {
      conditions
    },
  }
});
