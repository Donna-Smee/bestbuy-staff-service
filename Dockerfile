# Step 1: Use an official Node.js runtime as the base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
# This allows us to install dependencies without copying the entire app first.
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the port that the app will run on (3000 by default)
EXPOSE 3000

# Step 7: Command to run the app
CMD ["node", "server.js"]
