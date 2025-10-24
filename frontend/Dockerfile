# ETAPA 1: Construcción (build)
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: Producción (serve)
FROM node:18-alpine AS production
WORKDIR /usr/src/app
# Instalamos un servidor HTTP ligero (serve)
RUN npm install -g serve
COPY --from=build /app/build ./build
# El comando de inicio para servir el contenido estático
CMD ["serve", "-s", "build", "-l", "3000"]