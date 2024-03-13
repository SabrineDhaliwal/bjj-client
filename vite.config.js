// import { defineConfig } from 'vite'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // assetsInclude: ['**/*.jpg'],
  // define: {
  //   'import.meta.env.': {},
  // },
})




// this didn't work

// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   return defineConfig({
//     plugins: [react()],
//     assetsInclude: ["**/*.jpg"],
//     define: {
//       "process.env.BASE_URL": JSON.stringify(process.env.VITE_BASE_URL),
//     },
//   });
// };

// this didn't work 

// export default defineConfig(({mode})=> {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//     return defineConfig({
//       plugins: [react()],
//       assetsInclude: ["**/*.jpg"],
//       define: {
//         "process.env.BASE_URL": JSON.stringify(process.env.VITE_BASE_URL),
//       },
//     });
// })

// export default ({ mode })=> {
//   const env = loadEnv(mode, process.cwd(), '');

//   return defineConfig({
//     base: env.VITE_BASE_URL || '/',
//     define: {
//       'process.env.VITE_BASE_URL': JSON.stringify(env.VITE_BASE_URL),
//     },
//   })
// }
