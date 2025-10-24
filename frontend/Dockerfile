# frontend/Dockerfile

# ETAPA 1: Construcción (Build)
# Usamos un entorno Node.js base y ligero para compilar la aplicación React/Vite.
FROM node:18-alpine AS build
WORKDIR /app

# Copia los archivos de configuración
COPY package.json .
COPY vite.config.js . 
RUN npm install

# Copia el resto del código fuente
COPY . .

# Ejecuta el build de Vite. Esto genera los archivos estáticos en la carpeta 'dist'.
RUN npm run build


# ETAPA 2: Producción (Serve)
# Usamos una imagen Node.js limpia para el servidor final.
FROM node:18-alpine AS production
WORKDIR /usr/src/app

# REQUISITO: Instalamos un servidor HTTP ligero (serve)
RUN npm install -g serve

# ********** CORRECCIÓN CRÍTICA **********
# Copia la salida real de Vite (/app/dist) al destino 'build' 
# para que el comando 'serve' funcione.
COPY --from=build /app/dist ./build 
# **************************************

# REQUISITO: Exponer el puerto 3000
EXPOSE 3000

# Comando de inicio para servir el contenido estático
CMD ["serve", "-s", "build", "-l", "3000"]