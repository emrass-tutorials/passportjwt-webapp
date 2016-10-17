# passportjwt-webapp

## General

This project is based on http://blog.slatepeak.com/refactoring-a-basic-authenticated-api-with-node-express-and-mongo/

It includes:
* A node/express server-side app with passport authentication using local and JWT strategies
* A no-bullshit docker environment with external volumes for data storage

## Docker

### Setup the Volumes

TODO: create external volumes

### Rebuild the Image

Everytime the package.json is changed (i.e. dependency added or deleted), the node image needs to be rebuild using `docker-compose build node`

## Known Issues

[ ] The volume for node_modules does not yet fully work the way it is supposed to. I had an issue with missing dependencies once after running `docker-compose build node`. This needs further investigation. (The basic idea behind having this volume is to use the exact same dependencies in a test/staging/production environment, rather than running `npm install` in these environments separately, which could result in different dependency versions being installed)
