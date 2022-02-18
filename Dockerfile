# stage 1

FROM node:alpine AS builder

WORKDIR /mv1

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .
COPY package-lock.json .

RUN npm install --production

# add app
COPY . .
RUN npm run build

# start app
# Stage 2 - the production environment
FROM nginx:alpine

COPY --from=builder /mv1/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
