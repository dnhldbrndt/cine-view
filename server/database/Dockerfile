FROM node:18.12.1-bullseye-slim

RUN npm install -g npm@9.1.3

ADD package.json .
ADD app.js .
ADD review.js .
ADD movie.js .
ADD data/movies.json .
ADD data/reviews.json .
COPY . .
RUN npm install

EXPOSE 3030

CMD [ "node", "app.js" ]
