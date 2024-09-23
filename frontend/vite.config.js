import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.1.100', // 將這裡替換為你的固定IP地址，例如 '192.168.1.100'
  //   port: 5173, // 你可以指定要使用的端口號
  // },
})
