FROM node:lts-alpine@sha256:9e38d3d4117da74a643f67041c83914480b335c3bd44d37ccf5b5ad86cd715d1

ENV NODE_ENV production
ENV PORT 8080

WORKDIR /app

COPY --chown=node:node . /app

#RUN npm install
RUN npm ci --only=production

USER node

EXPOSE 8080

#CMD ["npm" "start"]
CMD ["npm", "run", "dev"]
