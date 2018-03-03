# Node v7 as the base image to support ES6
FROM node:7.2.0

# VOLUME [ "/usr/src" ]
# VOLUME [ "/usr/src/node_modules" ]
# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --quiet

RUN cp -a /tmp/node_modules /usr/node_modules
# COPY . /usr/src
WORKDIR /usr/src

EXPOSE 3000

CMD ["npm", "start"]
