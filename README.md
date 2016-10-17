# passportjwt-webapp

## General

This project is based on http://blog.slatepeak.com/refactoring-a-basic-authenticated-api-with-node-express-and-mongo/

It includes:
* A node/express server-side app with passport authentication using local and JWT strategies
* A no-bullshit docker environment with external volumes for data storage

## Docker

### Setup the Volumes

```shell
docker volume create --name passportjwtwebapp_mongo_config
docker volume create --name passportjwtwebapp_mongo_data
docker volume create --name passportjwtwebapp_node_modules
```

### Rebuild the Image

Everytime the package.json is changed (i.e. dependency added or deleted), the node image needs to be rebuild using `docker-compose build node`

### Helpful commands

```shell
docker-compose up -d # start the app in deamon-mode
docker-compose down  # stop the app, leaving volumes intact (since they are declared external)
docker-compose build node # build the node image with latest dependencies in package.json
docker exec -t -i node-jwtdemo /bin/bash # open a shell in node container
docker exec -t -i mongodb /bin/bash # open a shell in mongodb container
docker volume ls # show a list of volumes
docker rmi $(docker images -q -f dangling=true) # remove dangling docker images
```

## Known Issues

[ ] The volume for node_modules does not yet fully work the way it is supposed to. I had an issue with missing dependencies once after running `docker-compose build node`. This needs further investigation. (The basic idea behind having this volume is to use the exact same dependencies in a test/staging/production environment, rather than running `npm install` in these environments separately, which could result in different dependency versions being installed)
