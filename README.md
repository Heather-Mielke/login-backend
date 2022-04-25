# Login-backend

## To Run
- nodemon
- setup mongod path. Should look something like (mongod --dbpath ~/dev/data/db/)
- uncomment code in server.js and run (then can recomment)- (code only used to add csv data to database)
## Node.js and MongoDB 
User login with react frontend and node.js/mongodb backend.

### Description
A CSV file was converted into JSON data and inserted into my mongoDB local database. There is a user controller that created paths for the ability to access the database on localhost 3001 using express.js. There is a post route that allows users to login on the frontend (react) by posting to the backend with matching data then send back a message whether or not the data was a succussful match. 

### Frontend Link:
- https://github.com/Heather-Mielke/login-frontend