// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.jpg'],
//   define: {
//     'import.meta.env.': {},
//   },
// })

import { defineConfig, loadEnv } from 'vite'
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    define: {
      'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL)
    }
  })
}
