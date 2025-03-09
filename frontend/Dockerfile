# Use a Node.js base image
FROM node:18

# Set the working directory to the frontend folder
WORKDIR /frontend

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the frontend (optional)
CMD ["npx", "serve", "dist"]
