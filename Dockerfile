FROM node:bookworm-slim
ENV NODE_VERSION 18.19.0
COPY ./backend/server /server
COPY ./frontend/dist /frontend
WORKDIR /server
ENV NODE_ENV=Prodution
ENV FRONTEND_STATIC=/frontend
ENV DB_USER=admin
ENV DB_PWD=1234
ENV DB_HOST=localhost
ENV DB_PORT=27017
ENV DB_DATABASE=Learning
ENV SERVER_PORT=8080


EXPOSE 8080
CMD node .