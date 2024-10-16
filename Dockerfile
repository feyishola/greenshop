FROM node:alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the production version of your app
# RUN npm run build

# Install a simple HTTP server to serve the static files
# RUN npm install -g serve

EXPOSE 3000

# Serve the production build of your app
# CMD ["serve", "-s", "build"]

CMD npm run start