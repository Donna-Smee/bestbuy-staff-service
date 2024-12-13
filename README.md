# bestbuy-staff-service

## Brief explanation of the staff-service microservice and its functionality
The staff-service microservice uses Node.js (and express) to handle CRUD operations on staff data.
The staff data includes id, name, position, department, and email.
The staff-service currently holds the in-store memory.

The service handles CRUD operations such as:
- gets all users
- gets user by ID
- creates a user
- modify a user
- delete a user

## Documentation on how to use the microservice, including endpoints for the CRUD operations
To use the microservice on a local machine, go to http://localhost:<PORT> 
The port number can be 3000 (add an environemnt file .env), or use default/your choice.

Endpoints:

POST /staff

GET /staff
get /staff/:id

PUT /staff/:id

DELETE /staff/:id

**Explaination of each**:
POST /staff
    - Accepts a JSON object and creates a new staff member

GET /staff
    - Retrieves a list of all staff members in JSON format

get /staff/:id
    - Retrieves a single staff member by their id. If the staff member is not found, it returns a 404 status code

PUT /staff/:id
    -Allows updating a staff member’s details based on their id. Only the provided fields are updated, and missing fields retain their previous values

DELETE /staff/:id
    - Deletes a staff member based on their id. If the staff member is not found, it returns a 404 status code.

## A description of each task completed

### Task 1: Develop the Staff-Service Microservice
Created the code in a folder using Node.js and Express.
Used package.json, package-lock.json to keep dependencies separate.
Used .env to keep configurations separate.
Uploaded to GitHub repo.

### Task 2: Containerize the Service
Created a Dockerfile for this service, and used Docker command line to build, tag, and push the image to the DockerHub.
Uploaded the Dockerfile to GitHub.

### Task 3: Deploy to Azure Kubernetes Service (AKS)
Create an Azure Kubernetes Service with 1 masternode, and 1 worker node.
Used Azure CLI to connect to the VSCode folder.
Created a YAML file for deployment.
Tested the YAML file to deploy to the Kubernetes. Success.
Pushed the YAML file to GitHub.

### Task 4: Set Up CI/CD Pipeline
Added .github/workflows/ci_cd.yaml, with the given file.
Uploaded to Github and tested.
Several tries to get the workflow to work, but it eventually did!


### Task 5: Test the CI/CD Pipeline
Made changes (commits) until it worked. GitHub actions showed success.
Test endpoints.

## Documentation of any technical issues encountered.
Turns out I put package.json and package-lock.json in gitignore but that was needed!!

## Docker Image
[Docker Image Link](https://hub.docker.com/repository/docker/dailydonuts/bestbuy-staff-service/general)

