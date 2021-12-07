# Implementation Notes

Backend  Node js API

1. Seed data in Mongo db
2. Starts APi on port 5000

API endpoint for search by disease or drugname -> http://localhost:5000/drugs/{searchTerm}


<b>Notes to start the api</b>


It uses mongo image from docker hub . To run using local mongo ,  add MongoConnectionUri as "mongodb://localhost:27017/temedica" in .env file 
and to run using docker compose add MongoConnectionUri as "mongodb://mongo:27017/temedica" in .env file


  
