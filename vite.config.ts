import { defineConfig } from 'vite'
import islands from 'vite-islands'
import windicss from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    islands(),
    windicss(),
  ],
})
