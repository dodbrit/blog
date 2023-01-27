## DEFINE BASE IMAGE
FROM alpine:3.17.1

## INSTALL REQUIREMENTS
RUN apk add hugo

## INCLUDE BLOG
COPY blog /blog

## SET WORKING DIRECTORY
WORKDIR /blog

## DEFINE PORTS
EXPOSE 8080

## DEFINE ENTRY COMMAND
CMD [ "hugo", "server", "--bind", "0.0.0.0", "--port", "8080" ]