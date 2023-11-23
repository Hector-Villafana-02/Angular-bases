# Utiliza la ultima version de node
FROM node:latest as builder
# Selecciona la ubicacion de guardado
WORKDIR /app
# Copia el package.json
COPY package*.json ./
# Instala npm
RUN npm ci
# Copia todos los archivos
COPY . .

RUN npm run build


FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/bases/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
