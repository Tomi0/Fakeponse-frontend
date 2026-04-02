# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Compilar la aplicación Angular para producción
RUN npm run build

# Stage 2: Serve
FROM nginx:1.27-alpine

# Copiar nginx.conf personalizado (opcional pero recomendado)
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copiar la aplicación compilada desde la etapa anterior
COPY --from=builder /app/dist/fakeponse-frontend/browser /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
