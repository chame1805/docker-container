# backend/Dockerfile

# 1. IMAGEN BASE
# Usamos una imagen Node.js ligera (slim o alpine) para reducir el tamaño final del contenedor.
# Usar una versión específica (como 18-slim) es mejor que 'latest'.
FROM node:18-slim 

# 2. DIRECTORIO DE TRABAJO
# Establece el directorio dentro del contenedor donde se ejecutará la aplicación.
WORKDIR /usr/src/app

# 3. INSTALACIÓN DE DEPENDENCIAS
# Copia solo los archivos package.json y package-lock.json (si existe) para aprovechar el cache de Docker.
COPY package*.json ./

# Instala todas las dependencias.
# Esto incluye las de producción (Express, mysql2, cors, dotenv).
# Nota: cross-env y nodemon (devDependencies) no se instalan por defecto aquí, 
# lo cual es bueno para producción, ya que solo se usaban en desarrollo local.
RUN npm install

# 4. COPIAR CÓDIGO FUENTE
# Copia el resto de los archivos del proyecto (la carpeta src/, etc.) al contenedor.
COPY . .

# 5. PUERTO
# Informa a Docker que el contenedor escucha en este puerto (documentación).
EXPOSE 5000

# 6. COMANDO DE INICIO
# Define el comando que se ejecuta cuando el contenedor arranca.
# Usa 'npm start' que apunta a 'node src/server.js' (definido en package.json).
CMD [ "npm", "start" ]