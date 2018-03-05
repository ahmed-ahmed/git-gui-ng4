# Node v7 as the base image to support ES6
FROM node:7.2.0

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --quiet

COPY package.json /usr/src/package.json
COPY .angular-cli.json /usr/src/.angular-cli.json
COPY tsconfig.json /usr/src/tsconfig.json

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/node_modules/.bin:$PATH

RUN cp -a /tmp/node_modules /usr/src/node_modules

WORKDIR /usr/src

CMD ["npm", "start"]
