FROM node:16

# Create app directory
WORKDIR /app

# Copy the source code to the container
ADD . /app

# Copy the package.json to the container
COPY package.json /app

# Install required dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Run Node
CMD ["node", "index.js"]