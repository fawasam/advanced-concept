# Stage 1: Build dependencies
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js ./

ENV NODE_ENV=production
USER node

EXPOSE 3000

CMD ["node", "server.js"]