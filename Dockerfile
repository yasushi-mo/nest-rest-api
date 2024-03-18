# Use the official Node.js image as the base image
FROM node:21-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# For reduced image size, faster build times, and security, add "--production" flag
# It means npm will skip installing packages listed in the devDependencies
RUN npm install --production

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Define the command to run your app using npm
CMD ["npm", "run", "start:prod"]