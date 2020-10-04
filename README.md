WebHook test

# Artistify
Consumes Youtube Data API and provides a new interface for playing and queing music.

## ENVIRONMENT 

A `.env` file must be added to the root directory of this project.

Your `.env` file must look like this:

```
YOUTUBE_API_KEY=<your youtube data api key goes here>
SECRET=<this should be some random string, it is used to sign JWTs>

NODE_ENV=development

DB_HOST=<optional database connection for user auth>
DB_DATABASE=<optional database connection for user auth>
DB_USER=<optional database connection for user auth>
DB_PORT=<optional database connection for user auth>
DB_PASS=<optional database connection for user auth>
```

## EXPRESS

### install express

`npm i`

### run express server

`npm start`

### run server tests

while server is running,
`npm test`

# REACT

### enter react folder

`cd frontend`

### install react

inside of `frontend` folder,
`npm i`

### start dev server

inside of `frontend` folder,
`npm start`

### build react into static asset in public folder

inside of `frontend` folder,
`npm run build`
