// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': {}, // Mock process.env for compatibility
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.jsx', // Path to the main file where `hello-wc` is defined
      name: 'HelloWC',
      fileName: 'hello-wc',
      formats: ['es', 'umd'], // ES module and UMD for compatibility
    },
    rollupOptions: {
      // Externalize dependencies like React
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
