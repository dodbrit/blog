## DEFINE BASE NODE IMAGE
FROM node:18.7.0-bullseye-slim

## INCLUDE DOCUMENTATION
COPY /app /app

## DEFINE WORKING DIRECTORY
WORKDIR /app

## DEFINE EXPOSED PORT
EXPOSE 8080

## DEFINE ENTRYPOINT (RUN DEV SERVER)
ENTRYPOINT [ "npm" ]
CMD [ "run", "start", "--", "--host", "0.0.0.0", "--port", "8080" ]
