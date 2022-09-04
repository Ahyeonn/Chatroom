# Chatroom
This is a Chatroom website where the socket.io application is implemented. Users can see who is currently connected to the chatroom and
be able to send a message. This website is built for ACS 3210, 'Advanced Web Patterns'. 

## How to run with Docker
1. Open Terminal and run this command to build the image.
```
docker build -t chatroom
```
2. Run the container by running the command below.
```
docker run -p 3000:3000 chatroom
```
3. Navigate to http://localhost:3000
