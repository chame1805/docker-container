// frontend-angel/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ************ CONFIGURACIÓN DE PROXY PARA DESARROLLO ************
  server: {
    proxy: {
      // Redirige todas las peticiones que comienzan con /api 
      // a la dirección donde corre tu Backend de Node.js (http://localhost:5000)
      '/api': {
        target: 'http://localhost:5000', 
        changeOrigin: true, // Importante para la comunicación entre diferentes puertos
        secure: false, // Puedes usar false ya que es local
        // Nota: El 'rewrite' es opcional, pero aquí no lo necesitamos porque 
        // tu backend ya usa '/api'
      },
    }
  }
  // ***************************************************************
});