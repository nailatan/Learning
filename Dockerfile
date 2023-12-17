FROM mhart/alpine-node:slim-16
COPY ["./backend/server/package.json","./backend/server/package-lock.json", "/server/"]
WORKDIR /server
RUN npm install
WORKDIR /
COPY ./backend/server /server
ENV NODE_ENV=Prodution
EXPOSE 8080
CMD node .