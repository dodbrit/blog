# dodbrit Blog

To read the blog click [here](https://blog.dodbrit.dev)

### Development
To run the development server, build the Dockerfile and run.

``` bash
### PULL GIT SUBMODULES
$   git submodule update --init --recursive

## BUILD IMAGE
$   docker build -t docs:test .

## RUN IMAGE
$   docker run --rm -it -p 8080:8080 -v $(pwd)/app:/app docs:test

```

To access the documentation navigate to `http://localhost:8080`


### Fresh Start
To create a new application, you can run the following command;

``` bash
## RUN NODE IMAGE
$   docker run --rm -it --entrypoint /bin/bash -v $(pwd):/app -w /app node:latest

## INSTALL DOCUSAURUS AND SCAFFOLD PROJECT
$   npx create-docusaurus@latest {{ APP_NAME }} classic
```